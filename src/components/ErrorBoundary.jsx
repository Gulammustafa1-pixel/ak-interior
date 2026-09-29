import {Component} from 'react'
export default class ErrorBoundary extends Component{
  state={e:null}
  static getDerivedStateFromError(e){return {e}}
  render(){
    return this.state.e
      ? <pre style={{padding:24,whiteSpace:'pre-wrap',color:'red'}}>{String(this.state.e.stack||this.state.e)}</pre>
      : this.props.children
  }
}