/*
 * @Author: bluemaxs
 * @Date: 2022-08-30 11:23:36
 * @LastEditors: bluemaxs
 * @LastEditTime: 2022-09-07 15:16:07
 * @Description: file content
 */
import React, { useState } from "react";
import EChartsReact from 'echarts-for-react';
import 'echarts/lib/chart/treemap';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';

const option = {
    series: [
        {
          type: 'treemap',
          data: [
            // {
            //     name: 'node',
            //     value: 50,
            //     children: [
                    {
                        name: 'nodeD',
                        value: 10,
                        children: [
                            { name: 'nodeDa', value: 5, children: [{name: 'nodeDa1', value: 2}, {name: 'nodeDa2', value: 3 }] },
                            { name: 'nodeDb', value: 5 }
                        ]
                    },
                    {
                        name: 'nodeC',
                        value: 10,
                        children: [
                            { name: 'nodeCa', value: 5, children: [{name: 'nodeCa1', value: 2}, {name: 'nodeCa2', value: 3 }] },
                            { name: 'nodeCb', value: 5 }
                        ]
                    },
                    {
                      name: 'nodeA',
                      value: 10,
                      children: [
                        {
                          name: 'nodeAa',
                          value: 6
                        },
                        {
                          name: 'nodeAb',
                          value: 4
                        }
                      ]
                    },
                    {
                      name: 'nodeB',
                      value: 20,
                      children: [
                        {
                          name: 'nodeBa',
                          value: 20,
                          children: [
                            {
                              name: 'nodeBa1',
                              value: 20
                            }
                          ]
                        }
                      ]
                    }
                // ]
            // },
           
          ]
        }
      ]
}
export default function TreeMapDemo() {
    // const [option, setOption] = useState({
    //     backgroundColor: '#fff',
    //     //整个图片的背景色设置为白色
    //     title: {
    //       text: '次数分布',
    //       left: 'center',
    //       top: 0,
    //       textStyle: {
    //         color: 'black',
    //         fontFamily: '黑体',
    //         fontSize: 28
    //       }
    //     },
    //     tooltip: {
    //       trigger: 'item',
    //       formatter: function (a: any) {
    //         var str = '类别:';
    //         return str.concat(
    //           a.name + '\n\n' + '次数:',
    //           a.value + '\n\n' + '占比:',
    //           ((a.value / 2010) * 100).toFixed(2) + '%'
    //         );
    //       }
    //     },
    //     series: [
    //       {
    //         type: 'treemap',
    //         center: ['50%', '50%'],
    //         label: {
    //           show: true,
    //           formatter: function (a: any) {
    //             var str = '类别:';
    //             return str.concat(
    //               a.name + '\n\n' + '次数:',
    //               a.value + '\n\n' + '占比:',
    //               ((a.value / 2010) * 100).toFixed(2) + '%'
    //             );
    //           },
    //           //这里的重点在于设置百分比
    //           position: 'inside',
    //           color: 'black',
    //           fontSize: 14
    //         },
    //         color: [
    //           '#FFC0CB',
    //           '#D8BFD8',
    //           '#B0C4DE',
    //           '#87CEEB',
    //           '#B0E0E6',
    //           '#AFEEEE',
    //           '#98FB98'
    //         ],
    //         data: [
    //           {
    //             name: '3分钟以上',
    //             value: 1080,
    //             children: [
    //                 {name: '2分半以内', value: 540 },
    //                 {name: '2分半以上', value: 540 }
    //             ]
    //           },
    //           {
    //             name: '2分钟以上',
    //             value: 108
    //           },
    //           {
    //             name: '1分钟以上',
    //             value: 108
    //           },
    //           {
    //             name: '1分钟以内',
    //             value: 1902,
    //             children: [
    //               {
    //                 name: '10秒以内',
    //                 value: 499
    //               },
    //               {
    //                 name: '11秒-20秒',
    //                 value: 445
    //               },
    //               {
    //                 name: '21秒-30秒',
    //                 value: 515
    //               },
    //               {
    //                 name: '31秒-40秒',
    //                 value: 236
    //               },
    //               {
    //                 name: '41秒-50秒',
    //                 value: 189
    //               },
    //               {
    //                 name: '51秒-60秒',
    //                 value: 16
    //               }
    //             ]
    //           }
    //         ]
    //       }
    //     ]
    // })
    return (
        <EChartsReact option={option} style={{ width: '100%', height: '700px' }} />
    )
}