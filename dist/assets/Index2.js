var f=(i,d,l)=>new Promise((x,a)=>{var r=c=>{try{t(l.next(c))}catch(n){a(n)}},s=c=>{try{t(l.throw(c))}catch(n){a(n)}},t=c=>c.done?x(c.value):Promise.resolve(c.value).then(r,s);t((l=l.apply(i,d)).next())});import{j as e,c as g,d as b,U as u,S as j}from"./ui-vendor.js";import{L as h,r as m}from"./react-vendor.js";import{N as p,F as w}from"./Footer.js";import{c as o}from"./index.js";import{T as N}from"./TournamentTable.js";const y=()=>e.jsxs("div",{className:"relative min-h-[70vh] flex items-center justify-center overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/90 z-10",style:{backgroundImage:"url('https://images.unsplash.com/photo-1508098682722-e99c643e7f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"overlay"}}),e.jsx("div",{className:"relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center",children:e.jsxs("div",{className:"animate-slide-up max-w-5xl",children:[e.jsx("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-bold text-fc-yellow mb-6 drop-shadow-lg tracking-tight leading-tight",children:"ФК ГУДАУТА"}),e.jsx("p",{className:"text-xl md:text-2xl lg:text-3xl text-white max-w-3xl mx-auto mb-12 drop-shadow-md font-medium tracking-wide leading-relaxed",children:"Футбольный клуб с богатой историей и традициями"}),e.jsxs("div",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center",children:[e.jsxs(h,{to:"/tournaments",className:"btn-primary bg-fc-yellow hover:bg-fc-yellow/90 text-fc-darkGreen px-8 py-4 text-lg",children:["Турнирные таблицы",e.jsx(g,{size:20})]}),e.jsx(h,{to:"/matches",className:"btn-secondary bg-fc-green text-white hover:bg-fc-darkGreen border-fc-green px-8 py-4 text-lg",children:"Расписание матчей"})]})]})}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-900 to-transparent z-10"})]}),v=({title:i,type:d,season:l,teams:x,source:a,featured:r=!1})=>e.jsx("div",{className:o("block rounded-xl overflow-hidden card-hover border transition-all duration-300",r?"bg-gradient-to-br from-fc-green/5 to-fc-green/20 border-fc-green":"bg-white border-gray-200 hover:border-fc-green/50"),children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("div",{className:o("flex items-center justify-center w-12 h-12 rounded-full",r?"bg-fc-green text-white":"bg-fc-green/10 text-fc-green"),children:e.jsx(b,{size:20})}),e.jsx("span",{className:o("text-sm font-medium px-3 py-1 rounded-full",r?"bg-fc-yellow/20 text-fc-yellow":"bg-gray-100 text-gray-600"),children:l})]}),e.jsx("h3",{className:o("text-xl font-bold mb-2 line-clamp-2",r?"text-fc-green":"text-gray-800"),children:i}),e.jsx("p",{className:"text-gray-500 mb-4",children:d}),e.jsxs("div",{className:"flex justify-between items-center pt-4 border-t border-gray-100",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:[x," команд"]}),e.jsxs("div",{className:o("text-sm font-medium",r?"text-fc-green":"text-gray-600"),children:["Источник: ",a]})]})]})}),T=({tournamentId:i,source:d})=>e.jsx(N,{tournamentId:i,source:d}),k=()=>f(void 0,null,function*(){return[{id:"1",title:"Кубок среди любительских команд МОО СФФ «Сибирь» сезона 2024 года",type:"Кубок",season:"2024",teams:8,source:"local",featured:!0},{id:"2",title:"Чемпионат Сибири среди любителей 2024",type:"Чемпионат",season:"2024",teams:12,source:"local",featured:!1}]}),G=()=>{const[i,d]=m.useState([]),[l,x]=m.useState(!0),[a,r]=m.useState(null);return m.useEffect(()=>{f(void 0,null,function*(){try{const t=yield k();d(t);const c=t.find(n=>n.featured)||t[0];r(c),x(!1)}catch(t){console.error("Error fetching tournaments:",t),x(!1)}})},[]),e.jsxs("div",{className:"min-h-screen flex flex-col bg-white",children:[e.jsx(p,{}),e.jsxs("main",{className:"flex-grow page-transition",children:[e.jsx(y,{}),e.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"ТЕКУЩЕЕ ПОЛОЖЕНИЕ В ТАБЛИЦЕ"}),e.jsx("div",{className:"w-24 h-1 bg-fc-green mx-auto mb-6"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto mb-8",children:"Актуальные данные о положении команд в турнирной таблице"}),a&&!l&&e.jsxs("div",{className:"inline-flex items-center text-fc-green font-medium",children:[e.jsx(b,{size:18,className:"mr-2"}),a.title]})]}),e.jsx("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden",children:a&&!l?e.jsx(T,{tournamentId:a.id,source:a.source}):e.jsx("div",{className:"min-h-[400px] flex items-center justify-center",children:e.jsx("div",{className:"h-10 w-10 animate-spin rounded-full border-4 border-fc-green border-t-transparent"})})}),e.jsx("div",{className:"mt-10 text-center",children:e.jsxs(h,{to:"/tournaments",className:"btn-primary bg-fc-green text-white px-6 py-3 inline-flex items-center shadow-md hover:shadow-lg transition-all duration-300",children:["Все турнирные таблицы",e.jsx(g,{size:18,className:"ml-2"})]})})]})}),e.jsx("section",{className:"bg-blue-900 text-white py-20",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-fc-yellow mb-6 drop-shadow-md",children:"ФУТБОЛ — ЭТО БОЛЬШЕ ЧЕМ ИГРА"}),e.jsx("div",{className:"w-24 h-1 bg-fc-yellow mx-auto mb-6"}),e.jsx("p",{className:"text-xl text-white/90 max-w-3xl mx-auto",children:"Наш клуб воспитывает характер, дисциплину и командный дух"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"bg-blue-800/50 p-8 rounded-lg border-l-4 border-fc-yellow shadow-lg hover:shadow-xl transition duration-300",children:[e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(b,{className:"text-fc-yellow mr-4 h-10 w-10"}),e.jsx("h3",{className:"text-2xl font-bold",children:"Традиции"})]}),e.jsx("p",{className:"text-white/80 text-lg",children:"Богатая история и традиции нашего клуба — основа нашего развития и достижений на футбольном поле."})]}),e.jsxs("div",{className:"bg-blue-800/50 p-8 rounded-lg border-l-4 border-fc-yellow shadow-lg hover:shadow-xl transition duration-300",children:[e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(u,{className:"text-fc-yellow mr-4 h-10 w-10"}),e.jsx("h3",{className:"text-2xl font-bold",children:"Команда"})]}),e.jsx("p",{className:"text-white/80 text-lg",children:"Наши игроки — это единая команда профессионалов, нацеленных на результат и постоянное совершенствование."})]}),e.jsxs("div",{className:"bg-blue-800/50 p-8 rounded-lg border-l-4 border-fc-yellow shadow-lg hover:shadow-xl transition duration-300",children:[e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(j,{className:"text-fc-yellow mr-4 h-10 w-10"}),e.jsx("h3",{className:"text-2xl font-bold",children:"Развитие"})]}),e.jsx("p",{className:"text-white/80 text-lg",children:"Мы постоянно развиваемся, ставим амбициозные цели и достигаем новых высот в мире футбола."})]})]})]})}),e.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-12",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4 border-l-4 border-fc-green pl-4",children:"ТУРНИРЫ И СОРЕВНОВАНИЯ"}),e.jsx("p",{className:"text-gray-600 max-w-2xl",children:"Следите за актуальными турнирными таблицами и результатами всех соревнований с участием нашего клуба"})]}),e.jsxs(h,{to:"/tournaments",className:"mt-4 md:mt-0 btn-secondary border-2 shadow-md hover:shadow-lg transition-all duration-300",children:["Все соревнования",e.jsx(g,{size:18,className:"ml-2"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:l?Array(3).fill(0).map((s,t)=>e.jsx("div",{className:"h-72 rounded-xl bg-gray-100 animate-pulse shadow"},t)):i.filter(s=>s.featured||s.type==="регулярный").slice(0,3).map(s=>e.jsx(v,{id:s.id,title:s.title,type:s.type,season:s.season,teams:s.teams,source:s.source,featured:s.featured},s.id))})]})})]}),e.jsx(w,{})]})};export{G as default};
