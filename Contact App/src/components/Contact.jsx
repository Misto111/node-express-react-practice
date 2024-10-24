import Avatar from "./Avatar";
import Detail from "./Detail";

function Contact(contacts) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{contacts.name}</h2>
        <Avatar img={contacts.img}/>
      </div>

      <div className="bottom">
       <Detail detailInfo={contacts.tel} />
       <Detail detailInfo={contacts.email} />
      
      </div>
    </div>
  );
}

export default Contact;
