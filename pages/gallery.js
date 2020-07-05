import React, { Component } from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import { getRandomQuote } from '../lib/quote';
import { getGalleryImages } from '../lib/gallery';
import '../styles/GalleryImage.scss';

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
        const Images = () => this.galleryData.map((image, index) => {
            let imagePerRowClass = 'p-1 col-xs-12 ';
            if (index % 7 < 4) imagePerRowClass += 'col-sm-3'
            else imagePerRowClass += 'col-sm-4';
            return (
                <div className={imagePerRowClass} key={image.id}> 
                    <div className="gallery-image-box">
                        <img src={image.src} className="gallery-image"/>
                    </div>
                </div>
            )
        });

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
						<Images />
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
