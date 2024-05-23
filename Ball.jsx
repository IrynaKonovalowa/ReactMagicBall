function Ball(props){
    const [state, setState] = React.useState({answer: props.data.answer, classCSS: props.data.classCSS, answers: props.data.answers });
    
const Answer = function(){
let randomAnswerBall = Math.floor(Math.random()*state.answers.length);
let AnswerBall = state.answers[randomAnswerBall];
console.log(randomAnswerBall);
console.log(AnswerBall);
let className = "ballOpacity";
setState({answer: AnswerBall, classCSSDefault: className, answers: state.answers }); 
};
const Ask = function(){    
    let className = "ball";
    setState({answer: state.answer, classCSS: className, answers: state.answers});
    };

    return ( 
        <div className={state.classCSS}>          
        <button onMouseDown={Answer} onMouseUp={Ask}>{state.answer}</button>
        </div>);
    }