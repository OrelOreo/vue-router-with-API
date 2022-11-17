import AccueilPage from './components/Accueil'
import PageUn from './components/Page1'
import PageDeux from './components/Page2'
import PostPage from './components/Post'


export default [
    {path: '/', component: AccueilPage},
    {path: '/page1', component: PageUn},
    {path: '/page2', component: PageDeux},
    {path: '/blogpost/:id', component: PostPage},
]