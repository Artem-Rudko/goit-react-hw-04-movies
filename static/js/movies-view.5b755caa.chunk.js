(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{36:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return h}));var a=n(42),r=n.n(a),c="bf0957773382584d05a14ff44449aecb",o="https://api.themoviedb.org/3",i=function(){return r.a.get("".concat(o,"/trending/movie/day?api_key=").concat(c)).then((function(t){return t.data.results}))},s=function(t){return r.a.get("".concat(o,"/search/movie?query=").concat(t,"&api_key=").concat(c))},u=function(t){return r.a.get("".concat(o,"/search/movie").concat(t,"&api_key=").concat(c))},h=function(t){return r.a.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(c,"&language=en-US&append_to_response=reviews,credits"))}},43:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(9),r=n(2),c=n(1),o=Object(r.g)((function(t){var e=t.moviesList,n=t.location;return Object(c.jsx)("ul",{children:e.map((function(t){return Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:{pathname:"/movies/".concat(t.id),state:{from:n}},children:t.title})},t.id)}))})}))},73:function(t,e,n){t.exports={container:"MoviesView_container__1jEwH",SearchForm__input:"MoviesView_SearchForm__input__1I_Hu"}},75:function(t,e,n){"use strict";n.r(e);var a=n(34),r=n(35),c=n(38),o=n(37),i=n(0),s=n(43),u=n(36),h=n(73),l=n.n(h),p=n(1),f=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={query:"",moviesList:[]},t.formSubmitHandler=function(e){e.preventDefault(),t.onQueryChange(t.state.query),Object(u.b)(t.state.query).then((function(e){t.setState({moviesList:e.data.results})})).catch((function(e){return t.setState({error:e})})).finally(t.setState({query:""}))},t.onQueryChange=function(e){t.props.history.push({pathname:t.props.location.pathname,search:"?query=".concat(e)})},t.queryHandler=function(e){t.setState({query:e.target.value})},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.location.search&&Object(u.c)(this.props.location.search).then((function(e){t.setState({moviesList:e.data.results})})).catch((function(e){return t.setState({error:e})})).finally(this.setState({query:""}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:l.a.container,children:[Object(p.jsxs)("form",{className:l.a.SearchForm,onSubmit:this.formSubmitHandler,children:[Object(p.jsx)("input",{className:l.a.SearchForm__input,type:"text",autoComplete:"off",placeholder:"input movie's title",autoFocus:!0,value:this.state.query,onChange:this.queryHandler}),Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:"Search"})]}),this.state.moviesList&&Object(p.jsx)(s.a,{moviesList:this.state.moviesList})]})}}]),n}(i.Component);e.default=f}}]);
//# sourceMappingURL=movies-view.5b755caa.chunk.js.map