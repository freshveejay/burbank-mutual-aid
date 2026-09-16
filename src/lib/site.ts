// Almost all sitewide copy lives here. Edit the text between the quotes,
// keep the commas, save, and push — the site redeploys automatically.
export const site = {
  name: "Burbank Mutual Aid",
  tagline: "Solidarity, Not Charity",
  email: "mutualaid.burbankca@gmail.com",
  instagram: "https://www.instagram.com/burbankmutualaid/",
  instagramHandle: "@burbankmutualaid",

  // Keep the exact time and meeting spot OFF the website. We share those
  // with volunteers after they sign up. Only this vague phrasing should
  // appear anywhere on the site.
  event: {
    summary: "Sunday evening in downtown Burbank",
    footer: "Sunday evenings · downtown Burbank",
  },

  mission:
    "Mutual aid is neighbors taking care of neighbors — not charity, but solidarity. Burbank Mutual Aid is a volunteer community showing up every Sunday night in downtown Burbank with food, clothing, and hygiene supplies for our unhoused neighbors. We believe consistency builds trust, and trust builds understanding. From that foundation, we work alongside the people most affected by a system that has failed — learning together, taking collective action, and pushing for real change.",

  // Shown in the side panel on the Get Involved page.
  orgs: [
    {
      name: "Burbank Tenants Union",
      url: "https://burbanktenants.com",
      note: "Volunteer-run renter-rights group. Meets Thursdays at 7:30 PM, online unless specified.",
    },
    {
      name: "Mutual Aid LA Network",
      url: "https://mutualaidla.org",
      note: "Directory of mutual aid groups across LA County.",
    },
    {
      name: "San Fernando Valley Mutual Aid",
      url: "https://www.instagram.com/sfvmutualaid/",
      note: "Sister group serving the Valley.",
    },
  ],

  // Shown on the Press page and on the home page.
  press: [
    {
      title:
        "Residents Build Bridges With Homeless Neighbors as Burbank Solutions Lag",
      outlet: "Burbank Leader",
      author: "Jarret Liotta",
      date: "March 20, 2026",
      excerpt:
        "A grassroots group of Burbank residents has been quietly showing up every week with food, clothing, and conversation for unhoused neighbors — filling a gap as the city's official solutions remain stalled.",
      url: "https://outlooknewspapers.com/burbankleader/residents-build-bridges-with-homeless-neighbors-as-burbank-solutions-lag/article_039150b7-ff7c-465a-9a7b-ed5f09a1b1d7.html",
    },
    {
      title: "Overnight Citations of Homeless Raise Concerns in Burbank",
      outlet: "Burbank Leader",
      author: "Jarret Liotta",
      date: "March 2026",
      excerpt:
        "Overnight citations issued to people sleeping outside in Burbank prompted community pushback and brought new advocates — including Burbank Mutual Aid — to City Council.",
      url: "https://outlooknewspapers.com/burbankleader/overnight-citations-of-homeless-raise-concerns-in-burbank/article_cbabe0df-50a7-40ca-b44a-3bb46d96d3dc.html",
    },
  ],
} as const;
