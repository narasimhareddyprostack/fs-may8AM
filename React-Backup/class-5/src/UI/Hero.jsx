import React from 'react'
class Hero extends React.Component {
    hero_Details = {
        name: "Yash",
        movie: "KGF2",
        hitorFlop: "Blockbluster",
        image: 'data:image/jpeg;base64,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'
    }


    render() {
        return <div>
            <pre>{JSON.stringify(this.hero_Details)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h5>Movie Details</h5>
                            </div>
                            <div className="card-body">
                                <img src={this.hero_Details.image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Hero