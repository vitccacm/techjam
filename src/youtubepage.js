import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

const YoutubePage = () => {
  const location = useLocation();
  const video = location.state?.video;
  const title = location.state?.title;
  const filename = location.state?.file
  console.log('f',filename)
  const file = require(`./contentpage/${filename}.md`)
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   fetch(file)
  //     .then((r) => r.text())
  //     .then((text) => {
  //       setText(text);
  //     });
  // }, [file]);

  // const formatText = (text) => {
  //   return text.split("\n").map((line, index) => (
  //     <p key={index} style={{ margin: 0 }}>
  //       {line}
  //     </p>
  //   ));
  // };

  const [tosText, setTosText] = useState('')
  useEffect(() => {
		fetch(file).then(res => res.text()).then(text => setTosText(text))
	})

  return (
    <div style={{ color: 'white', margin: '40px', marginLeft: '55px' }}>
      <h6 style={{ fontSize: '30px', marginBottom: '30px' }}>{title}</h6>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe
          width="860"
          height="515"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div style={{marginTop:'35px'}}>
      <ReactMarkdown children={tosText} />
        
      </div>
      
    </div>
  );
}

export default YoutubePage;
