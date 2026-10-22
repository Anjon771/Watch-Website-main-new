import React from 'react';

interface FooterProps {
  showHeritageColumns?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showHeritageColumns = true }) => {
  return (
    <footer className="bg-[rgb(175,170,170)] border-t border-neutral-400 p-6 md:p-8 text-neutral-900 mt-12">
      {showHeritageColumns && (
        <div className="max-w-6xl mx-auto mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-wider text-black underline underline-offset-8 decoration-1 decoration-neutral-600">
              About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-neutral-800 leading-relaxed">
            <div className="bg-[#e4e1e1]/80 p-4 rounded border border-neutral-300">
              <h3 className="font-bold italic underline mb-2 text-[#880e0e] text-base">
                Ahead of the Rest
              </h3>
              <p>
                Tissot was founded in Le Locle, Switzerland in 1853 by father-and-son watchmaking duo Charles-Félicien and Charles-Émile Tissot. From the very beginning, the brand was focused on innovation, producing the first-ever mass-produced pocket watch and the first pocket watch with two time zones. Tissot has proved to be the best since ages.
              </p>
            </div>

            <div className="bg-[#e4e1e1]/80 p-4 rounded border border-neutral-300">
              <h3 className="font-bold italic underline mb-2 text-[#880e0e] text-base">
                Sporting Accuracy
              </h3>
              <p>
                Over the years, the Tissot brand has become a standard in the sports world. Its timepieces have been chosen as the official timekeepers for many highly regarded events and organizations, including the Tour de France, MotoGP, and the NBA. Tissot continues to work with sports associations around the world to deliver the most accurate timing solution for each particular event.
              </p>
            </div>

            <div className="bg-[#e4e1e1]/80 p-4 rounded border border-neutral-300">
              <h3 className="font-bold italic underline mb-2 text-[#880e0e] text-base">
                Style Meets Function
              </h3>
              <p>
                Jomashop’s offering of men’s and women’s Tissot watches includes silver-tone luxury watches alongside rugged carbon fiber models. From mountain climbers and basketball players to business professionals, Tissot timepieces are worn by people who appreciate efficiency. Elaborating on a classic automatic design, the brand’s flagship Powermatic 80 movement features 80 hours of extended battery life.
              </p>
            </div>

            <div className="bg-[#e4e1e1]/80 p-4 rounded border border-neutral-300">
              <h3 className="font-bold italic underline mb-2 text-[#880e0e] text-base">
                A Quest for Excellence
              </h3>
              <p>
                By staying ahead of the curve, Tissot has built a reputation for producing dynamic timepieces that integrate the latest technology with superior design features. Whether utilizing synthetic materials to create the world’s first plastic movement or inventing tactile displays for the brand’s T-touch series, Tissot continues its pursuit of enduring quality.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-neutral-400/60 pt-4 text-center font-serif-luxury italic text-sm text-neutral-800">
        Copyright &copy; {new Date().getFullYear()} Tissot Watches and Co. All rights reserved.
      </div>
    </footer>
  );
};
