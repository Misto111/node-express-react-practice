import * as pi from "../math";


const img = "https://picsum.photos/200";


function List() {
    return <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
    <li>{pi.add(2, 5)}</li>
    <li>{pi.multiply(5, 7)}</li>
    <li>{pi.devide(100, 20)}</li>
    <li><img  alt="becon" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"></img></li>
    <li><img  alt="random img" src= {img}  /></li>
   </ul>
};

export default List;