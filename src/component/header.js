import Body from './body';
import './header.css';

function Header(){
  return(
    <div className='Header'>
      <div className='container'>
   
     

    <div class="nav2">
<a href="#" class="logo">ReAacT</a>
 <div class="bx bx-menu" id="menu-icon"></div>

 <ul class="navlist">
  <li> <a href="#what's on">What's On</a></li>
  <li> <a href="#explore">Explore</a></li>
  <li> <a href="#visit">Visit</a></li>
  <li> <a href="#learn">Learn</a></li>
  <li> <a href="#join us">Join Us</a></li>
  </ul>
</div>
<div className='intro'>
<h1>Introduction</h1>
</div>

<p>React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths. Some of those paths were successful; many more were dead-ends that led to new insights. One lesson we’ve learned is that it’s frustrating for the community to wait for new features without having insight into these paths that we’re exploring.

We typically have a number of projects being worked on at any time, ranging from the more experimental to the clearly defined. Looking ahead, we’d like to start regularly sharing more about what we’ve been working on with the community across these projects.

To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.

Server Components
We announced an experimental demo of React Server Components (RSC) in December 2020. Since then we’ve been finishing up its dependencies in React 18, and working on changes inspired by experimental feedback.

In particular, we’re abandoning the idea of having forked I/O libraries (eg react-fetch), and instead adopting an async/await model for better compatibility. This doesn’t technically block RSC’s release because you can also use routers for data fetching. Another change is that we’re also moving away from the file extension approach in favor of annotating boundaries.

We’re working together with Vercel and Shopify to unify bundler support for shared semantics in both Webpack and Vite. Before launch, we want to make sure that the semantics of RSCs are the same across the whole React ecosystem. This is the major blocker for reaching stable.

Asset Loading
Currently, assets like scripts, external styles, fonts, and images are typically preloaded and loaded using external systems. This can make it tricky to coordinate across new environments like streaming, server components, and more. We’re looking at adding APIs to preload and load deduplicated external assets through React APIs that work in all React environments.

We’re also looking at having these support Suspense so you can have images, CSS, and fonts that block display until they’re loaded but don’t block streaming and concurrent rendering. This can help avoid “popcorning“ as the visuals pop and layout shifts.

Static Server Rendering Optimizations
Static Site Generation (SSG) and Incremental Static Regeneration (ISR) are great ways to get performance for cacheable pages, but we think we can add features to improve performance of dynamic Server Side Rendering (SSR) – especially when most but not all of the content is cacheable. We’re exploring ways to optimize server rendering utilizing compilation and static passes.</p>




 </div>
  </div>

  )
  
}

export default Header;