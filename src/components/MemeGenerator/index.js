import {useState} from 'react'

import {
  Container,
  InnerContainer,
  MemeHeading,
  FormContainer,
  Label,
  Input,
  InputContainer,
  SelectInput,
  ResultContainer,
  FormResultContainer,
  GeneratorButton,
  ResultTopText,
  ResultBottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

const MemeGenerator = () => {
  const [bg, setBg] = useState('')
  const [top, setTop] = useState('')
  const [bottom, setBottom] = useState('')
  const [font, setFont] = useState(fontSizesOptionsList[0].optionId)
  const [data, setData] = useState({})

  const updateBg = e => setBg(e.target.value)
  const updateTop = e => setTop(e.target.value)
  const updateBottom = e => setBottom(e.target.value)
  const updateFont = e => setFont(e.target.value)

  const onFormSubmit = e => {
    e.preventDefault()
    const imageDetails = {
      background: bg,
      topText: top,
      bottomText: bottom,
      fontSize: font,
    }
    setData(imageDetails)
  }

  const renderForm = () => (
    <FormContainer onSubmit={onFormSubmit}>
      <InputContainer>
        <Label htmlFor="image">Image URL</Label>
        <Input
          onChange={updateBg}
          placeholder="Enter the Image URL"
          id="image"
          type="text"
          value={bg}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="top">Top Text</Label>
        <Input
          onChange={updateTop}
          placeholder="Enter the Top Text"
          id="top"
          type="text"
          value={top}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="bottom">Bottom Text</Label>
        <Input
          onChange={updateBottom}
          placeholder="Enter the Bottom Text"
          id="bottom"
          type="text"
          value={bottom}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="font">Font Size</Label>
        <SelectInput value={font} onChange={updateFont} id="font">
          {fontSizesOptionsList.map(eachOption => (
            <option key={eachOption.optionId}>{eachOption.displayText}</option>
          ))}
        </SelectInput>
      </InputContainer>
      <GeneratorButton type="submit">Generate</GeneratorButton>
    </FormContainer>
  )

  const renderResult = () => (
    <ResultContainer data-testid="meme" background={data.background}>
      <ResultTopText fontSize={data.fontSize}>{data.topText}</ResultTopText>
      <ResultBottomText fontSize={data.fontSize}>
        {data.bottomText}
      </ResultBottomText>
    </ResultContainer>
  )

  return (
    <Container>
      <InnerContainer>
        <MemeHeading>Meme Generator</MemeHeading>
        <FormResultContainer>
          {renderForm()}
          {renderResult()}
        </FormResultContainer>
      </InnerContainer>
    </Container>
  )
}

export default MemeGenerator
