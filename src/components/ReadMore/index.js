import {useState} from 'react'

import {
  AppContainer,
  MainContainer,
  Title,
  Subtitle,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const splitTheMessage = [reactHooksDescription.slice(0, 170)]

  const [buttonStatus, setButtonStatus] = useState(false)

  const onClickButton = () => {
    setButtonStatus(prevState => !prevState)
  }

  const descriptionText = buttonStatus ? reactHooksDescription : splitTheMessage
  const buttonText = buttonStatus ? 'Read Less' : 'Read More'

  return (
    <AppContainer>
      <MainContainer>
        <Title>React Hooks</Title>
        <Subtitle>Hooks are a new addition to React</Subtitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{descriptionText}</Description>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </MainContainer>
    </AppContainer>
  )
}

export default ReadMore
