import React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "../../styles/Accesories/ShareSocialMedia.css";
import { useParams } from 'react-router-dom';

function ShareSocialMedia() {
    //const{productId} = useParams();
    //const shareUrl = `http://localhost:3000/product/${productId}`;

    const shareUrl = "http://homu.online/"

    return (
        <div className="shareSocialMediaContainer">
            <div>
                <FacebookShareButton url={shareUrl} title="Estás en el lugar correcto">
                    <BsFacebook className="iconShare" />
                </FacebookShareButton>
            </div>
            <div>
                <TwitterShareButton url={shareUrl} title="Estás en el lugar correcto">
                    <BsTwitter className="iconShare" />
                </TwitterShareButton>
            </div>
            <div>
                <WhatsappShareButton url={shareUrl} title="Estás en el lugar correcto">
                    <BsWhatsapp className="iconShare" />
                </WhatsappShareButton>
            </div>
            <div>
                <LinkedinShareButton url={shareUrl}>
                    <BsLinkedin className="iconShare" />
                </LinkedinShareButton>
            </div>
        </div>
    )
}

export default ShareSocialMedia;