document.getElementById('markdown-input').addEventListener('input', function() {
    const inputText = this.value;
    const renderedHTML = renderMarkdown(inputText);
    document.getElementById('markdown-output').innerHTML = renderedHTML;
});

function renderMarkdown(markdown) {
    markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    markdown = markdown.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
    markdown = markdown.replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>');
    markdown = markdown.replace(/\*(.*?)\*/gim, '<i>$1</i>');
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
    markdown = markdown.replace(/^\s*\n\* (.*)/gim, '<ul>\n<li>$1</li>\n</ul>');
    markdown = markdown.replace(/^\* (.*)/gim, '<li>$1</li>');
    markdown = markdown.replace(/^\s*\n\d\. (.*)/gim, '<ol>\n<li>$1</li>\n</ol>');
    markdown = markdown.replace(/^\d\. (.*)/gim, '<li>$1</li>');
    markdown = markdown.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
    markdown = markdown.replace(/`([^`]+)`/gim, '<code>$1</code>');
    markdown = markdown.replace(/\n/gim, '<br>');
    return markdown.trim();
}
