import './Book.css';
export default function Book({book}){
   const{Name,Price}=book
    return(
       
        <div className='book'>
            <h3>book Name:{Name}</h3>
            <p>price: {Price}</p>
            
        </div>
    )
}