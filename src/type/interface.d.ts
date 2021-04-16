import React from 'react';
import { History, Location } from "history"
import { message } from 'antd';
export interface Props extends React.Props<any> {  // 参数类型审查
  match: match;
  history: History;
  Location: Location;
  home: any;
  homeActions: any;
}

/**
 * 工具类函数：
 */

// 上传图片时限制上传图片的宽高比
export function checkImageWH(file, width, height, isSize) {
  return new Promise(function (resolve, reject) {
    let filereader = new FileReader()
    filereader.onload = e => {
      let src = e.target.result
      const image = new Image()
      image.onload = function () {
        if (width && this.width / this.height !== width / height) {
          // debugger
          message.error('上传图片的宽高不符合要求，请重传')

          // } else if (height && this.height !== height) {
          //   Modal.error({
          //     title: '请上传高为' + height + '的图片',
          //   })
          reject()
        } else if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
          message.error('您只能上传JPG/PNG格式的图片');
          reject()
        } else if (file.size / 1024 > 30) {
          if (isSize == 'noSize') {
            resolve()
          } else {
            message.error('上传图片必须小于30K');
            reject()
          }
        } else {
          resolve()
        }
      }
      image.onerror = reject
      image.src = src
    }
    filereader.readAsDataURL(file)
  })
}

// 处理视频上传宽高
export function checkVideoWH(file, width, height) {
  return new Promise(function (resolve, reject) {
    const url = URL.createObjectURL(file)
    const video = document.createElement('video')
    video.onloadedmetadata = evt => {
      // Revoke when you don't need the url any more to release any reference
      URL.revokeObjectURL(url)
      if (width && video.videoWidth / video.videoHeight !== width / height) {
        message.error('上传视频的宽高比例不符合要求，请重传')
        reject()
      } else {
        resolve()
      }
    }
    video.src = url
    video.load() // fetches metadata
  })
}
