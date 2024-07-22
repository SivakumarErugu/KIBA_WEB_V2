import { 
    CustomProfile, 
    HeaderContainer,
    ProfileIcon, 
    Span, 
    SpanTag 
} from './StyledComponents'

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>
            <CustomProfile>
                {/* <SpanTag>Admin</SpanTag> */}
                <Link to='/manage-credentials'>
                    <ProfileIcon>
                        <Span>K</Span>
                    </ProfileIcon>
                </Link>
            </CustomProfile>

        </HeaderContainer>
    )
}

export default Header