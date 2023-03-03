import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

export default function BookInfo({ books }) {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the coding interview
                </h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={null} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias quia ducimus soluta harum accusamus tenetur vel
                    corrupti magni nesciunt doloremque, possimus vitae
                    distinctio quod aperiam expedita. Nihil nostrum nemo
                    quibusdam.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias quia ducimus soluta harum accusamus tenetur vel
                    corrupti magni nesciunt doloremque, possimus vitae
                    distinctio quod aperiam expedita. Nihil nostrum nemo
                    quibusdam.
                  </p>
                </div>
                <button className="btn">
                    Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
            <div className="row">
                <div className="books__selected--top">
                    <h2 className="book__selected--title--top">
                        Recommended Books
                    </h2>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
