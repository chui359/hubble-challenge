import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcon } from './styles/SocialIcon.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcon>
        <li>
            <a href='https:twitter.com'>
                <FaTwitter />
            </a>
        </li>
        <li>
            <a href='https:facebook.com'>
                <FaFacebook />
            </a>
        </li>
        <li>
            <a href='https:Linkedin.com'>
                <FaLinkedin />
            </a>
        </li>
    </StyledSocialIcon>
    )
}
