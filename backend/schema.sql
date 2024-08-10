CREATE TABLE apartments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  price DECIMAL NOT NULL,
  area DECIMAL,
  bedrooms_count INT,
  bathrooms_count INT,
  furnished BOOLEAN,
  ownership VARCHAR(50),
  description TEXT,
  logo VARCHAR(2555)
);


INSERT INTO apartments (name, address, price, area, bedrooms_count, bathrooms_count, furnished, ownership, description, logo)
VALUES
  ('Cozy Studio Apartment', '123 Elm Street, Springfield', 1200.00, 450.0, 1, 1, TRUE, 'Rented', 'A charming studio apartment with modern amenities.', 'cozy_studio.png'),
  ('Spacious 2-Bedroom Condo', '456 Maple Avenue, Springfield', 2500.00, 850.0, 2, 2, TRUE, 'Owned', 'A spacious condo with a large living area and excellent views.', 'spacious_condo.png'),
  ('Elegant 3-Bedroom House', '789 Oak Lane, Springfield', 3500.00, 1500.0, 3, 2, FALSE, 'Owned', 'An elegant house with a beautiful garden and open floor plan.', 'elegant_house.png'),
  ('Modern Loft', '321 Pine Street, Springfield', 2000.00, 700.0, 1, 1, TRUE, 'Rented', 'A modern loft with high ceilings and contemporary design.', 'modern_loft.png'),
  ('Affordable 1-Bedroom Apartment', '654 Cedar Drive, Springfield', 950.00, 500.0, 1, 1, TRUE, 'Rented', 'An affordable option with convenient access to local amenities.', 'affordable_apartment.png');
