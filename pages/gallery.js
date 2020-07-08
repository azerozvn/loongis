import React, { Component } from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import { getRandomQuote } from '../lib/quote';
import { getGalleryImages } from '../lib/gallery';
import '../styles/GalleryImage.scss';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.galleryData = this.props.galleryData;
        this.sliderData = {
            quote: this.props.quote
        }
    }

    state = {
        modal: false,
        image: {}
    }

    openGalleryView = (image) => {
        this.setState({
            modal: true,
            image
        });
    }

    closeGalleryView = () => {
        this.setState({
            modal: false,
            image: {}
        })
    }

    getIndex = () => this.galleryData.indexOf(this.state.image);
    
    prev = () => {
        const prevImage = this.galleryData[this.getIndex() - 1];
        this.setState({
            image: prevImage
        });
    }

    next = () => {
        const nextImage = this.galleryData[this.getIndex() + 1];
        this.setState({
            image: nextImage
        });
    }

    render() {
        const title = 'Loongis | Gallery';
        const Images = () => this.galleryData.map((image, index) => {
            let imagePerRowClass = 'p-1 col-xs-12 ';
            if (index % 7 < 4) imagePerRowClass += 'col-sm-3'
            else imagePerRowClass += 'col-sm-4';
            return (
                <div className={imagePerRowClass} key={image.id}> 
                    <div className="gallery-image-box" onClick={(e) => this.openGalleryView(image, e)}>
                        <img src={image.src} className="gallery-image"/>
                    </div>
                </div>
            )
        });
        const GalleryModal = () => 
        (
            <MDBContainer>
                <MDBModal isOpen={this.state.modal} toggle={this.closeGalleryView} size="fluid" backdrop={false}>
                    <div className="gallery-modal-backdrop">
                        <img src={this.state.image.src} className="gallery-modal-backdrop-image"/>
                        <div className="gallery-modal-backdrop-veil"></div>
                    </div>
                    <MDBModalBody>
                        <div className="gallery-modal-box">
                            {/* Close btn */}
                            <div className="gallery-modal-control gallery-modal-close m-4" onClick={this.closeGalleryView}><b>X</b></div>
                            {/* Prev btn */}
                            {
                                this.getIndex() > 0 && 
                                <div className="gallery-modal-control gallery-modal-left-chevron mx-4" onClick={this.prev}><i className="fa fa-chevron-left" aria-hidden="true"></i></div>
                            }
                            {/* Main image */}
                            <div className="container">
                                <img src={this.state.image.src} className="gallery-modal-image"/>
                            </div>
                            {/* Next btn */}
                            {
                                this.getIndex() < this.galleryData.length - 1 &&
                                <div className="gallery-modal-control gallery-modal-right-chevron mx-4" onClick={this.next}><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
                            }
                        </div>
                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        );

        return (
            <Layout title={title}>
				<Slider sliderData={this.sliderData} />
				<div className="container py-4 gallery">
					<div className="row">
						<div className="col">
							<h2 className="display-4">Gallery</h2>
							<p className="lead">A picture says a thousand words.</p>
						</div>
					</div>
					<div className="row flex-row">
						<Images />
					</div>
                    <GalleryModal />
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
