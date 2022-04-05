import React, {useState,Suspense} from 'react';
import article__image1 from "../../../images/news/article1.png"
import article__image2 from "../../../images/news/article2.png"
import article__image3 from "../../../images/news/article3.png"
import article__image4 from "../../../images/news/article4.png"
import article__image5 from "../../../images/news/article5.png"
import article__image6 from "../../../images/news/article6.png"
import article__image7 from "../../../images/news/article7.png"
import ModalWindow from "../../UI/ModalWindow";
import MainArticle from "./MainArticle";

const News = () => {

    const Article = React.lazy(() => import('./Article'))
    const [main_article,setArticle] = useState('')
    const [main_img,setImg] = useState(null)
    const [visible,setVisible] = useState(false)


    function activeModal(state,name,img) {
        setVisible(state);
        setArticle(name);
        setImg(img);
    }

    return (
        <main className = "news-main">
            <Suspense fallback = {<div className='loader'></div>}>
                <div className="news">
                    <Article onClick = {activeModal} name = {'art #1'} img = {article__image1}/>
                    <Article onClick = {activeModal} name = {'art #2'} img = {article__image2}/>
                    <Article onClick = {activeModal} name = {'art #3'} img = {article__image3}/>
                    <Article onClick = {activeModal} name = {'art #4'} img = {article__image4}/>
                    <Article onClick = {activeModal} name = {'art #5'} img = {article__image5}/>
                    <Article onClick = {activeModal} name = {'art #6'} img = {article__image6}/>
                    <Article onClick = {activeModal} name = {'art #7'} img = {article__image7}/>
                </div>
            </Suspense>
            <ModalWindow visible = {visible}
                         setVisible = {setVisible}
                         window_style={[]}
                         content_style={[]}>
                <MainArticle article = {main_article} img ={main_img}/>
            </ModalWindow>
        </main>
    );
};

export default News;