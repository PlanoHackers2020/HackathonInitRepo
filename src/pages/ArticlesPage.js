import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import ForOhFor from './ForOhFor';

const ArticlesPage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if (!article) return (
        <>
        <h2>These are not the droids you are looking for</h2>
        <ForOhFor/> 
        </>
        );

    const otherArticles = articleContent.filter(article => article.name !== name );

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlesPage;