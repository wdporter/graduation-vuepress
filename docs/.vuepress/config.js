module.exports = {
  title: "Graduation: The End of Illusions",
  description: "The Raj Materials. Graduation. The End of Illusions",
  evergreen: true,
  lang: "en",
  
	markdown: {
		extendMarkdown: md => {
			[
        md.use(require("markdown-it-footnote"))
      ]
    }
  },

  themeConfig: {
    search: false,
    smoothScroll: true,
    sidebar: [
      "/authors-note/",
      "/foreword/",
      "/1991-1-4/",
      "/1991-1-5/",
      "/1991-1-14/",
      "/1991-1-15/",
      "/1991-1-16/",
      "/1991-1-18/",
      "/1991-1-20/",
      "/1991-1-25/",
      "/1991-1-27/",
      "/1991-2-2/",
      "/1991-2-5/",
      "/1991-2-6/",
      "/1991-2-12/",
      "/1991-2-13/",
      "/1991-2-14/",
      "/1991-2-20/",
      "/1991-2-25/",
      "/1991-3-2/",
      "/1991-3-8/",
      "/1991-3-14/",
      "/1991-3-19/",
      "/1991-3-20/",
      "/1991-3-21/",
      "/1991-3-22/",
      "/1991-3-25/",
      "/1991-3-29/"
    ]
  },
  
  plugins: ["vuepress/back-to-top"]
}