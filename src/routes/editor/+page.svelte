<script lang="ts">
// Temporary placeholder for editor
</script>

<div class="min-h-screen bg-background text-foreground">
    <div class="container mx-auto px-4 py-8">
        <div class="max-w-6xl mx-auto">
            <header class="mb-8 border-b pb-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-2xl font-bold text-primary">LiveMD</a>
                        <span class="text-sm text-muted-foreground">Collaborative Markdown Editor</span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                            Share
                        </button>
                        <button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                            Export
                        </button>
                    </div>
                </div>
            </header>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
                <!-- Editor Panel -->
                <div class="flex flex-col">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold">Markdown Editor</h2>
                        <div class="flex items-center space-x-2">
                            <span class="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                                ● Connected
                            </span>
                        </div>
                    </div>
                    <textarea 
                        class="flex-1 p-4 border rounded-lg bg-background text-foreground font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="# Welcome to LiveMD!

Start writing your markdown here...

## Features
- **Real-time collaboration** 
- Live preview
- Export to various formats
- Syntax highlighting

> Try writing something!"
                    ></textarea>
                </div>

                <!-- Preview Panel -->
                <div class="flex flex-col">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold">Preview</h2>
                        <button class="p-2 rounded-md hover:bg-muted transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 p-4 border rounded-lg bg-muted/50 overflow-auto">
                        <article class="prose prose-sm dark:prose-invert max-w-none">
                            <h1>Welcome to LiveMD!</h1>
                            <p>Start writing your markdown here...</p>
                            <h2>Features</h2>
                            <ul>
                                <li><strong>Real-time collaboration</strong></li>
                                <li>Live preview</li>
                                <li>Export to various formats</li>
                                <li>Syntax highlighting</li>
                            </ul>
                            <blockquote>
                                <p>Try writing something!</p>
                            </blockquote>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 