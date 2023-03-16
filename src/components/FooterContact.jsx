import React from 'react'
import '../css/InitialPage.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const FooterContact = () => {
  return (
    <div className='contentSocialMedia'>
                <div className='contentIconMendia'>
                    <h1>Follow me in Social Media</h1>
                    <div className='contentIcons'>
                        <a href="https://www.linkedin.com/in/federico-horita-2ab4b8218/">
                            <LinkedInIcon />
                        </a>

                        <a href="https://instagram.com/hola_fefa?igshid=YmMyMTA2M2Y=">
                            <InstagramIcon />
                        </a>

                        <a href="mailto:horitafederico@gmail.com">
                            <EmailIcon />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=1140666266">
                            <WhatsAppIcon />
                        </a>




                    </div>
                </div>
                <div className='contentContact'>
                    <h1>Contacts</h1>
                    <div className='contentTelMail'>

                        <h4>011-4066-6266</h4>
                    </div>
                </div>

            </div>
  )
}
