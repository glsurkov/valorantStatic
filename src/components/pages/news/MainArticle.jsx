import React from 'react';

const MainArticle = (props) => {
    return (
        <>
            <h1 className='article-title main-article__article-title article-title--black'>{props.article}</h1>
            <div className='main-article'>
                <img className="main-article__image" src={props.img} alt="article-img"/>
                <p className="main-article__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci distinctio dolor fuga fugiat
                    incidunt, ipsum labore minima mollitia nobis non nulla officia optio pariatur repellat reprehenderit
                    tempore veritatis, voluptas!Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur
                    minus odit optio perspiciatis sunt vitae! A beatae consequatur dicta, dignissimos error, fugiat,
                    libero praesentium quo recusandae suscipit voluptatibus voluptatum?Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Alias aliquam autem consectetur dolor ducimus enim error excepturi,
                    ipsum nemo, nesciunt nisi nulla officia officiis rem sed temporibus unde, ut vitae. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur assumenda commodi consequatur culpa
                    cum cumque deleniti dolor, doloremque dolores error excepturi illo incidunt iure minus nisi nostrum
                    numquam quam quis quod quos repellendus totam ullam velit vitae. Fugiat, natus, tempora? Adipisci
                    alias aliquid amet aut blanditiis consequuntur, dolore eius eligendi error ex excepturi
                    exercitationem id illo in ipsum iusto laboriosam maxime molestiae molestias mollitia necessitatibus
                    nostrum pariatur perspiciatis porro quasi qui quibusdam quidem quo sapiente sed sequi similique
                    soluta, tempore temporibus totam voluptatibus voluptatum! Commodi consectetur consequuntur culpa
                    deserunt, doloribus enim excepturi ipsum itaque iure iusto maiores minima nihil obcaecati officiis
                    optio pariatur, possimus quo quos sed sit tenetur veritatis vero, voluptas.
                </p>
            </div>
        </>
    );
};

export default MainArticle;