import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesPage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if (!article) return <h1>Can no find article</h1>

    const otherArticles = articleContent.filter(article => article.name !== name );

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlesPage;