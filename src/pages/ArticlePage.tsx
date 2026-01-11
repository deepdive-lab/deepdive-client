import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { POSTS } from '@/data/content';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, Clock, Share2, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ArticlePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const post = POSTS.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="flex h-[60vh] flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">Post not found</h2>
                <Button onClick={() => navigate('/archive')}>Back to Archive</Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="group mb-8 flex items-center text-sm text-slate-400 transition-colors hover:text-indigo-400"
            >
                <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back
            </button>

            <article className="space-y-8">
                {/* Header */}
                <header className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                            {post.companyName}
                        </Badge>
                        <div className="flex items-center text-sm text-slate-500">
                            <Calendar className="mr-1.5 h-4 w-4" />
                            {post.published_at}
                        </div>
                        <div className="flex items-center text-sm text-slate-500">
                            <Clock className="mr-1.5 h-4 w-4" />
                            {post.readTime}
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
                        {post.title}
                    </h1>

                    <p className="text-xl text-slate-400 leading-relaxed">
                        {post.description}
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                        <div className="flex gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-slate-800/70 px-3 py-1 text-xs uppercase tracking-wide text-indigo-300"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Thumbnail */}
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                    <img
                        src={post.thumbnail_url}
                        alt={post.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Content */}
                <div>
                    <ReactMarkdown
                        children={post.content}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-12 mb-6 text-slate-100" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-100 border-b border-slate-800 pb-2" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-8 mb-4 text-slate-100" {...props} />,
                            p: ({ node, ...props }) => <p className="text-slate-300 leading-relaxed mb-6" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-6 space-y-2 text-slate-300" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-6 space-y-2 text-slate-300" {...props} />,
                            li: ({ node, ...props }) => <li className="ml-4" {...props} />,
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-400 my-6" {...props} />
                            ),
                            hr: ({ node, ...props }) => <hr className="my-10 border-slate-800" {...props} />,
                            a: ({ node, ...props }) => <a className="text-indigo-400 hover:text-indigo-300 underline transition-colors" {...props} />,

                            code(props) {
                                const { children, className, node, ref, ...rest } = props
                                const match = /language-(\w+)/.exec(className || '')
                                return match ? (
                                    <SyntaxHighlighter {...rest} style={dark} language={match[1]} PreTag="div">
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code {...rest} className={className}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    />
                </div>

                {/* Actions */}
                <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8 mt-12">
                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            className="border-slate-700 text-slate-300 hover:bg-slate-800"
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: post.title,
                                        text: post.description,
                                        url: window.location.href,
                                    });
                                } else {
                                    navigator.clipboard.writeText(window.location.href);
                                    alert('Link copied to clipboard!');
                                }
                            }}
                        >
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                        </Button>
                    </div>

                    <Button
                        className="bg-indigo-600 hover:bg-indigo-500 text-white"
                        onClick={() => window.open(post.origin_url, '_blank')}
                    >
                        Read Original Article
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </footer>
            </article>
        </div>
    );
};
