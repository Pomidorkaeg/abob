import{j as e,e as p,m as g,n as f,M as j}from"./ui-vendor.js";import{r as l}from"./react-vendor.js";import{N as b,F as N}from"./Footer.js";import{c as y}from"./index.js";const M=()=>{const[s,i]=l.useState("upcoming"),[a,r]=l.useState(new Date().getMonth()),[n,o]=l.useState(new Date().getFullYear()),m=[{id:"1",tournament:"3 Лига ПФЛ",tournamentId:"league-3",homeTeam:"ФК Сибирь",awayTeam:"Спартак",date:"15.05.2024",time:"19:00",stadium:"Стадион Спартак",city:"Новосибирск",status:"upcoming",result:null,month:4},{id:"2",tournament:"Кубок России",tournamentId:"russia-cup",homeTeam:"ФК Сибирь",awayTeam:"Спартак",date:"20.05.2024",time:"17:00",stadium:"Стадион Спартак",city:"Новосибирск",status:"upcoming",result:null,month:4},{id:"3",tournament:"Чемпионат города Новосибирска",tournamentId:"novosibirsk-championship",homeTeam:"ФК Сибирь",awayTeam:"Локомотив",date:"25.05.2024",time:"16:00",stadium:"Стадион Локомотив",city:"Новосибирск",status:"upcoming",result:null,month:4},{id:"4",tournament:"Кубок победы",tournamentId:"victory-cup",homeTeam:"Динамо",awayTeam:"ФК Сибирь",date:"05.06.2024",time:"18:30",stadium:"Стадион Динамо",city:"Барнаул",status:"upcoming",result:null,month:5},{id:"5",tournament:"3 Лига ПФЛ",tournamentId:"league-3",homeTeam:"ФК Сибирь",awayTeam:"Енисей",date:"10.04.2024",time:"17:00",stadium:"Стадион Спартак",city:"Новосибирск",status:"completed",result:{homeGoals:2,awayGoals:1},month:3},{id:"6",tournament:"Кубок России",tournamentId:"russia-cup",homeTeam:"ЦСКА",awayTeam:"ФК Сибирь",date:"05.04.2024",time:"19:30",stadium:"Арена ЦСКА",city:"Москва",status:"completed",result:{homeGoals:3,awayGoals:1},month:3},{id:"7",tournament:"Чемпионат города Новосибирска",tournamentId:"novosibirsk-championship",homeTeam:"ФК Сибирь",awayTeam:"Динамо",date:"28.03.2024",time:"16:00",stadium:"Стадион Спартак",city:"Новосибирск",status:"completed",result:{homeGoals:1,awayGoals:1},month:2},{id:"8",tournament:"Кубок новосибирской области",tournamentId:"novosibirsk-region-cup",homeTeam:"Локомотив",awayTeam:"ФК Сибирь",date:"15.03.2024",time:"15:00",stadium:"Стадион Локомотив",city:"Новосибирск",status:"completed",result:{homeGoals:0,awayGoals:2},month:2}].filter(t=>s==="upcoming"&&t.status==="upcoming"||s==="completed"&&t.status==="completed").filter(t=>s==="upcoming"?!0:t.month===a),c=()=>{a===0?(r(11),o(n-1)):r(a-1)},d=()=>{a===11?(r(0),o(n+1)):r(a+1)},x=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];return e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx(b,{}),e.jsxs("main",{className:"flex-grow pt-16 page-transition",children:[e.jsxs("div",{className:"relative bg-fc-green text-white py-16",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-fc-green/90 to-fc-darkGreen/80",style:{backgroundImage:"url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"overlay"}}),e.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6",children:e.jsx(p,{className:"w-8 h-8"})}),e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Матчи"}),e.jsx("p",{className:"max-w-2xl text-white/80 text-lg",children:"Расписание прошедших и предстоящих матчей ФК Сибирь"})]})})]}),e.jsx("section",{className:"py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-4",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>i("upcoming"),className:y("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",s==="upcoming"?"bg-fc-green text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"),children:"Предстоящие матчи"}),e.jsx("button",{onClick:()=>i("completed"),className:y("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",s==="completed"?"bg-fc-green text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"),children:"Прошедшие матчи"})]}),s==="completed"&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:c,className:"p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",children:e.jsx(g,{size:18})}),e.jsxs("div",{className:"text-sm font-medium",children:[x[a]," ",n]}),e.jsx("button",{onClick:d,className:"p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",children:e.jsx(f,{size:18})})]})]})}),e.jsx("section",{className:"py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:m.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("p",{className:"text-gray-500 mb-4",children:s==="upcoming"?"Нет предстоящих матчей":`Нет прошедших матчей в ${x[a]} ${n}`}),s==="completed"&&e.jsxs("div",{className:"flex justify-center space-x-4",children:[e.jsxs("button",{onClick:c,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex items-center",children:[e.jsx(g,{size:16,className:"mr-1"}),"Предыдущий месяц"]}),e.jsxs("button",{onClick:d,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex items-center",children:["Следующий месяц",e.jsx(f,{size:16,className:"ml-1"})]})]})]}):e.jsx("div",{className:"space-y-6",children:m.map(t=>{var u,h;return e.jsxs("div",{className:"bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 card-hover",children:[e.jsxs("div",{className:"p-4 border-b border-gray-100 bg-fc-green/5 flex justify-between items-center",children:[e.jsx("div",{className:"flex items-center",children:e.jsx("span",{className:"px-3 py-1 bg-white rounded-full text-sm font-medium text-fc-green",children:t.tournament})}),e.jsxs("div",{className:"flex items-center space-x-1 text-gray-500 text-sm",children:[e.jsx(p,{size:14}),e.jsx("span",{children:t.date}),e.jsx("span",{className:"text-gray-300",children:"|"}),e.jsx("span",{children:t.time})]})]}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("div",{className:"text-center flex-1",children:[e.jsx("div",{className:"font-bold text-xl mb-1",children:t.homeTeam}),e.jsx("div",{className:"text-sm text-gray-500",children:"Хозяева"})]}),e.jsx("div",{className:"flex-shrink-0 px-4",children:t.status==="completed"?e.jsxs("div",{className:"text-2xl font-bold",children:[(u=t.result)==null?void 0:u.homeGoals," - ",(h=t.result)==null?void 0:h.awayGoals]}):e.jsx("div",{className:"text-2xl font-bold text-gray-400",children:"VS"})}),e.jsxs("div",{className:"text-center flex-1",children:[e.jsx("div",{className:"font-bold text-xl mb-1",children:t.awayTeam}),e.jsx("div",{className:"text-sm text-gray-500",children:"Гости"})]})]}),e.jsxs("div",{className:"flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(j,{size:16,className:"mr-1"}),e.jsxs("span",{children:[t.stadium,", г. ",t.city]})]}),t.status==="completed"?e.jsx("a",{href:`/tournaments/${t.tournamentId}`,className:"text-fc-green hover:underline",children:"Турнирная таблица"}):e.jsx("div",{className:"px-3 py-1 bg-fc-yellow/10 text-fc-yellow rounded-full text-xs font-medium",children:"Предстоящий матч"})]})]})]},t.id)})})})]}),e.jsx(N,{})]})};export{M as default};
