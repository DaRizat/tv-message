import React, { Component } from 'react';
import bind from 'bind-decorator';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            message: "Enter Today's Message"
        };
    }

    @bind
    edit() {
        this.setState({ editing: true });
    }

    @bind
    setMessage(event) {
        this.setState({ message: event.target.value });
    }

    @bind
    submit(event) {
        this.setState({ editing: false });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                { !this.state.editing &&
                    <div className='the-big-container' onClick={this.edit}>
                      <div
                        className="the-big-one"
                        dangerouslySetInnerHTML={{ __html: `<p>${this.state.message.replace(/\n/g, '<br />')}</p>` }}
                      />
                    </div>
                }

                { this.state.editing &&
                    <form onSubmit={this.submit}>
                        <textarea onChange={this.setMessage} className='the-big-edit' value={this.state.message} />
                        <input type="submit" value="Go" className='btn btn-primary' />
                    </form>
                }
            </div>
        );
    }
}

export default Home;
