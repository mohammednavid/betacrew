import {useEffect} from 'react'
const Chat = () => {
    
    useEffect(() => {
        var Tawk_API = Tawk_API || {},
          Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://embed.tawk.to/60dc50ec65b7290ac638ae1a/1f9e9o7b4";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();
        Tawk_API.onLoad = function () {
          console.log("chat loaded");
          Tawk_API.setAttributes(
            {
              name: "Test Name",
              email: "email@email.com",
              hash: "hash value",
            },
            function (error) {}
          );
        };
      }, []);
      return null;    
}

export default Chat
