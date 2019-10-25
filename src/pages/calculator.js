import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout.js"
//import SEO from "../components/seo"

import styled from "styled-components"


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  margin-top: -2vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;
  height: 500px;
  border: 2px solid #FF66CC;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 600px;
    margin-top: 5vh;
  }
`

const Button = styled.button`
  border: 1px solid #FF66CC;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
`

const ZeroButton = styled(Button)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
`

const ClearButton = styled(Button)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3; 
`

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: '',
      oldNum: null,
      newNum: 0,
      display: '0',
      decimal: false,
      decimalPlaces: 0,
      done: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.equalify = this.equalify.bind(this)
  }
  
  equalify = () => {
      if (this.state.operator === '+') {
        this.setState({
          display: this.state.oldNum + this.state.newNum,
          decimalPlaces: 0,
        })
      } else if (this.state.operator === '-') {
        this.setState({
          display: this.state.oldNum - this.state.newNum,
          decimalPlaces: 0,
        })
      } else if (this.state.operator === '*') {
        this.setState({
          display: this.state.oldNum * this.state.newNum,
          decimalPlaces: 0,
        })
      } else if (this.state.operator === '/') {
        this.setState({
          display: this.state.oldNum / this.state.newNum,
          decimalPlaces: 0,
        })
      }    
  }
  
  operator = (value) => {
    if (this.state.operatorLast) {
      this.setState({
        operator: value,
        display: (this.state.display.slice(0, (this.state.display.length -1)) + value)
      })
    } else if (this.state.oldNum === null){
      this.setState({
        operator: value,
        operatorLast: true,
        oldNum: this.state.newNum,
        newNum: 0,
        decimalPlaces: 0,
        decimal: false,
        display: this.state.display + value
      })
    } else if (this.state.operator === '+') {
      this.setState({
        operator: value,
        operatorLast: true,
        oldNum: this.state.oldNum + this.state.newNum,
        newNum: 0,
        decimalPlaces: 0,
        decimal: false,
        display: this.state.display + value
      })
    } else if (this.state.operator === '-') {
      this.setState({
        operator: value,
        operatorLast: true,
        oldNum: this.state.oldNum - this.state.newNum,
        newNum: 0,
        decimalPlaces: 0,
        decimal: false,
        display: this.state.display + value
      })
      
    } else if (this.state.operator === '*') {
      this.setState({
        operator: value,
        operatorLast: true,
        oldNum: this.state.oldNum * this.state.newNum,
        newNum: 0,
        decimalPlaces: 0,
        decimal: false,
        display: this.state.display + value
      })
    } else if (this.state.operator === '/') {
      this.setState({
        operator: value,
        operatorLast: true,
        oldNum: this.state.oldNum / this.state.newNum,
        newNum: 0,
        decimalPlaces: 0,
        decimal: false,
        display: this.state.display + value
      })
    }
  }
  
  
  handleClick = (value) => {
    if (value === 'Clear') {
      this.setState({
        operator: '',
        operatorLast: false,
        oldNum: null,
        newNum: 0,
        display: '0',
        decimal: false,
        decimalPlaces: 0
      })
    } else if (value === '+') {
      this.operator(value)

    } else if (value === '-') {
      this.operator(value)
      
    } else if (value === '*') {
      this.operator(value)
      
    } else if (value === '/') {
      this.operator(value)
      
    } else if (value === '.') {
      if (this.state.decimal === false) {
        this.setState({
          decimal: true,
          display: this.state.display + value
        })
      }

    }
    else if (value === '=') {
      this.equalify()
    }
    
    //below this is if digits are entered
    else if (this.state.display.toString().length < 10) {
      if (this.state.display[0] !== '0') {
        if (this.state.decimal === false) {
          this.setState({
            operatorLast: false,
            newNum: (this.state.newNum * 10) + value,
            display: this.state.display + value.toString()
          })
        } else {
          this.setState({
            operatorLast: false,
            decimalPlaces: this.state.decimalPlaces +1,
            newNum: this.state.newNum + (value * Math.pow(10, 0-(this.state.decimalPlaces + 1))),
            display: this.state.display + value.toString()
          })
        }
      } else {
        if (this.state.decimal === false) {
          this.setState({
            operatorLast: false,
            newNum: (this.state.newNum * 10) + value,
            display: value.toString()
          })
        } else {
          this.setState({
            operatorLast: false,
            decimalPlaces: this.state.decimalPlaces +1,
            display: this.state.display + value.toString()
          })
        }        
      }
    }
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h3 style={{textAlign: `center`, marginTop: `-2vh`}}>React Calculator</h3>
        <p style={{textAlign: `center`}}>By Michael McCoy</p>
        <Container>
          <div style={{
            border: `1px solid #FF66CC`,
            gridColumnStart: 1,
            gridColumnEnd: 5,
            gridRowStart: 1,
            gridRowEnd: 2,
            fontSize: `70px`,
            textAlign: `right`,
          }}> {this.state.display} </div>
          <Clear value={'Clear'} name={'clear'} handleClick={this.handleClick} style={{
            gridColumnStart: 1,
            gridColumnEnd: 4,
            gridRowStart: 2,
            gridRowEnd: 3,
          }}/>
          <Key value={'/'} name={'divide'} handleClick={this.handleClick} />
          <Key value={7} name={'seven'} handleClick={this.handleClick} />
          <Key value={8} name={'eight'} handleClick={this.handleClick} />
          <Key value={9} name={'nine'} handleClick={this.handleClick} />
          <Key value={'*'} name={'multiply'} handleClick={this.handleClick} />
          <Key value={4} name={'four'} handleClick={this.handleClick} />
          <Key value={5} name={'five'} handleClick={this.handleClick} />
          <Key value={6} name={'six'} handleClick={this.handleClick} />
          <Key value={'-'} name={'subtract'} handleClick={this.handleClick} />
          <Key value={1} name={'one'} handleClick={this.handleClick} />
          <Key value={2} name={'two'} handleClick={this.handleClick} />
          <Key value={3} name={'three'} handleClick={this.handleClick} />
          <Key value={'+'} name={'add'} handleClick={this.handleClick} />
          <Zero value={0} name={'zero'} handleClick={this.handleClick} style={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
            gridRowStart: 6,
            gridRowEnd: 7,
          }}/>
          <Key value={'.'} name={'decimal'} handleClick={this.handleClick} />
          <Key value={'='} name={'equals'} handleClick={this.handleClick} />    
        </Container>
      </Layout>
    )
  }
}

class Key extends React.Component {
  render() {
    return (
      <Button id={this.props.name} onClick={() => {this.props.handleClick(this.props.value)}} >{this.props.value}</Button>
    )
  }
}


class Zero extends React.Component {
  render() {
    return (
      <ZeroButton id={this.props.name} onClick={() => {this.props.handleClick(this.props.value)}} >{this.props.value}</ZeroButton>
    )
  }
}

class Clear extends React.Component {
  render() {
    return (
      <ClearButton id={this.props.name} onClick={() => {this.props.handleClick(this.props.value)}} >{this.props.value}</ClearButton>
    )
  }
}

export default Calculator

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`