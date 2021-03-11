import React, {useState ,useEffect} from 'react'
import "./feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption'
import Post from './Post';
import { db } from './Addfirebase';
import firebase from "firebase"

function Feed() {
    const [input , setInput] = useState("");

    const [posts , setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id : doc.id,
                data : doc.data(),
            })))
        })
    }, [])


    const sendPost = (e) => {
        e.preventDefault(); 

        db.collection("posts").add({
            name : "Mahesh",
            description : "Frontend Engineer",
            message : input,
            photoUrl : "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    return (
        <div className="feed">
            <div className="input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e => setInput(e.target.value))} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-inputoptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#7085f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7fc15e"/>
                </div>
            </div>

            {posts.map(({id , data : {name , description , message , photoUrl} }) => (
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                
                />
            ))}
            {/* <Post name="Mahesh" description="Frontend Engineer" message="Building Linkedin Clone"/> */}
            
        </div>
    )
}

export default Feed
