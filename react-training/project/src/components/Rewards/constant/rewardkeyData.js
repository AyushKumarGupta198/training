import { goldcoin,goldcoin_1,goldcoin_2,goldcoin_3,goldcoin_4 } from "../../../assets/svg"

export const rewardKeyData=[
    {id:1, title:"Rackbreak", img:goldcoin, endDate:""},
    {id:2, title:"Daily bonus", img:goldcoin_1, endDate:new Date().getTime() + 13 * 60 * 60 * 1000 + 48 * 60 * 1000},
    {id:3, title:"Weekly bonus", img:goldcoin_2, endDate:new Date().getTime() + 74 * 60 * 60 * 1000 + 48 * 60 * 1000},
    {id:4, title:"Monthly bonus", img:goldcoin_3, endDate:new Date().getTime() + 500 * 60 * 60 * 1000 + 48 * 60 * 1000},
    {id:5, title:"Yearly bonus", img:goldcoin_4, endDate:new Date().getTime() + 56436 * 60 * 60 * 1000 + 48 * 60 * 1000},   
]