// app/data.js
const products = [
    {
        id: "1",
        title: "[페미닌/2col] 브이넥 퍼프 벌룬 소매 7부 반팔 랩 리본 고방 체크 패턴 롱 원피스 _아이메리",
        picture: require("./assets/1.jpg"),
    },
    {
        id: "2",
        title: "ES6 & Beyound",
        picture: require("./assets/2.jpg"),
    },
    {
        id: "3",
        title: "ng-book 2",
        picture: require("./assets/3.jpg"),
    },
    {
        id: "4",
        title: "Pro Git",
        picture: require("./assets/4.jpg"),
    },
    {
        id: "5",
        title: "Beginning Android Programming",
        picture: require("./assets/1.jpg"),
    },
    {
        id: "6",
        title: "ES6 & Beyound",
        picture: require("./assets/2.jpg"),
    },
    {
        id: "7",
        title: "ng-book 2",
        picture: require("./assets/3.jpg"),
    },
    {
        id: "8",
        title: "Pro Git",
        picture: require("./assets/4.jpg"),
    },
];
export const getProducts = () => {
    return products;
}