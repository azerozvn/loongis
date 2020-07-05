import React, { Component } from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import { getRandomQuote } from '../lib/quote';
import { getGalleryImages } from '../lib/gallery';

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.galleryData = this.props.galleryData;
        this.sliderData = {
            quote: this.props.quote
        }
    }

    render() {
        const title = 'Loongis | Gallery';

        return (
            <Layout title={title}>
				<Slider sliderData={this.sliderData} />
				<div className="container py-4">
					<div className="row">
						<div className="col">
							<h2 className="display-4">Gallery</h2>
							<p className="lead">A picture says a thousand words.</p>
						</div>
					</div>
					<div className="row flex-row">
						
					</div>
				</div>
			</Layout>
        )
    }
}

export async function getStaticProps() {
    const galleryData = getGalleryImages();
	const quote = getRandomQuote();
	return {
		props: {
            galleryData,
			quote
		}
	};
}

export default Gallery;
