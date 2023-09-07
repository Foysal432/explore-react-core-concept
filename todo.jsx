// export default function Todo({task}){
//     return(
//         <li>Task {task}</li>
//     )
// }
// conditional rendering
// export default function Todo({task,isDone}){
//  if (isDone === true) {
//     return <li> finished:{task}</li>
//  }
//   else {
//   
//  }
// }
// export default function Todo({task,isDone}){
// if(isDone){
//     return <li>Finished: {task}</li>
// }
// return <li>work on:{task}</li>
// }


// conditional rendering -3 tarnery

// export default function Todo({task,isDone}){
// return(<li>{isDone ? 'finished':'work on'}:{task}</li>)
// }

// condition rendering 4:&&

// export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone && ": done"}</li>
//     )
// }
// condition rendering 5:||
// export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone || ": do it"}</li>
//     )
// }


// conditional rendering 6
let listitem;
export default function Todo({task,isDone}){
    if(isDone){
        listitem = <li>Finished: {task}</li>
    }
    else{
       listitem = <li>work on:{task}</li>
    } 
    return listitem
    }