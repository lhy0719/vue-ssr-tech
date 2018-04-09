import '../assets/styles/footer.styl'

export default{
    data(){
        return {
            author:'LHY'
        }
    },
    render(){
        return (
            <div id="footer">
                <span>Writen By {this.author}</span>
            </div>
        )
    }
}