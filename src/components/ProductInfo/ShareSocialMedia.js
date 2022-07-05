import React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "../../styles/Accesories/ShareSocialMedia.css";
import { useParams } from 'react-router-dom';

function ShareSocialMedia() {
    const { productId } = useParams();

    const shareUrl = `http://homu.online/product/${productId}`

    return (
        <div className="shareSocialMediaContainer">
            <div>
                <FacebookShareButton url={shareUrl} title="¿Qué te parece este lugar?">
                    <BsFacebook className="iconShare" />
                </FacebookShareButton>
            </div>
            <div>
                <TwitterShareButton url={shareUrl} title="¿Qué te parece este lugar?">
                    <BsTwitter className="iconShare" />
                </TwitterShareButton>
            </div>
            <div>
                <WhatsappShareButton url={shareUrl} title="¿Qué te parece este lugar?">
                    <BsWhatsapp className="iconShare" />
                </WhatsappShareButton>
            </div>
            <div>
                <LinkedinShareButton url={shareUrl} title="¿Qué te parece este lugar?">
                    <BsLinkedin className="iconShare" />
                </LinkedinShareButton>
            </div>
        </div>
    )
}

export default ShareSocialMedia;