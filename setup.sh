#! /bin/bash
echo -ne '\n' | /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
brew install node
git clone https://github.com/ccent123/selenium-scraper selenium-scraper
cd ./selenium-scraper
npm install