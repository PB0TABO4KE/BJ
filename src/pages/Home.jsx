//import { useParams } from "react-router-dom";//
import Layout from "../components/Layout";

function Home () {
    return <>
    <h1>Главная страница</h1>
    <Layout mb={1} dt={2} gap="small"/>
    <Layout mb={4} dt={4} gap="none"/>
    <Layout mb={2} dt={3}/>
    </>
}

export {Home};