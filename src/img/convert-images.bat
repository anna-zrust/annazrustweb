@echo off

if not exist ..\..\dist\img mkdir ..\..\dist\img
if not exist ..\..\dist\img\hero mkdir ..\..\dist\img\hero
if not exist ..\..\dist\img\basic-img-landscape mkdir ..\..\dist\img\basic-img-landscape
if not exist ..\..\dist\img\gallery-landscape mkdir ..\..\dist\img\gallery-landscape
if not exist ..\..\dist\img\gallery-portrait mkdir ..\..\dist\img\gallery-portrait
if not exist ..\..\dist\img\recipe-thumbnail mkdir ..\..\dist\img\recipe-thumbnail
if not exist ..\..\dist\img\travel-card mkdir ..\..\dist\img\travel-card
if not exist ..\..\dist\img\others mkdir ..\..\dist\img\others


set dist_hero=..\..\dist\img\hero\
for %%f in (hero\*.jpg) do (
    exiftool -all= --icc_profile:all %%f

	convert %%f -resize 400 -quality 70 %dist_hero%%%~nf-mobile-400.webp
	convert %%f -resize 600 -quality 70 %dist_hero%%%~nf-mobile-600.webp
	convert %%f -resize 800 -quality 70 %dist_hero%%%~nf-mobile-800.webp
	convert %%f -resize 900 -quality 70 %dist_hero%%%~nf-mobile-900.webp
	convert %%f -resize 1200 -quality 70 %dist_hero%%%~nf-mobile-1200.webp
	convert %%f -resize 1600 -quality 70 %dist_hero%%%~nf-mobile-1600.webp
	convert %%f -resize 1800 -quality 70 %dist_hero%%%~nf-mobile-1800.webp
	convert %%f -resize 2400 -quality 70 %dist_hero%%%~nf-mobile-2400.webp

	convert %%f -resize 1440 -quality 70 -gravity center -crop 16:9 +repage %dist_hero%%%~nf-1440.webp
    convert %%f -resize 2160 -quality 70 -gravity center -crop 16:9 +repage %dist_hero%%%~nf-2160.webp
    convert %%f -resize 1920 -quality 70 -gravity center -crop 16:9 +repage %dist_hero%%%~nf-1920.webp
    convert %%f -resize 2880 -quality 70 -gravity center -crop 16:9 +repage %dist_hero%%%~nf-2880.webp
)

set dist_basic_img_landscape=..\..\dist\img\basic-img-landscape\
for %%f in (basic-img-landscape\*.jpg) do (
    exiftool -all= --icc_profile:all %%f

    convert %%f -resize 900 -quality 70 %dist_basic_img_landscape%%%~nf-900.jpg

	convert %%f -resize 300 -quality 70 %dist_basic_img_landscape%%%~nf-300.webp
	convert %%f -resize 400 -quality 70 %dist_basic_img_landscape%%%~nf-400.webp
	convert %%f -resize 600 -quality 70 %dist_basic_img_landscape%%%~nf-600.webp
	convert %%f -resize 900 -quality 70 %dist_basic_img_landscape%%%~nf-900.webp
	convert %%f -resize 1400 -quality 70 %dist_basic_img_landscape%%%~nf-1400.webp
	convert %%f -resize 1800 -quality 70 %dist_basic_img_landscape%%%~nf-1800.webp
)

set dist_gallery_landscape=..\..\dist\img\gallery-landscape\
for %%f in (gallery-landscape\*.jpg) do (
    exiftool -all= --icc_profile:all %%f

    convert %%f -resize 518 -quality 70 %dist_gallery_landscape%%%~nf-518.jpg

	convert %%f -resize 180 -quality 70 %dist_gallery_landscape%%%~nf-180.webp
	convert %%f -resize 270 -quality 70 %dist_gallery_landscape%%%~nf-270.webp
	convert %%f -resize 360 -quality 70 %dist_gallery_landscape%%%~nf-360.webp
	convert %%f -resize 518 -quality 70 %dist_gallery_landscape%%%~nf-518.webp
	convert %%f -resize 777 -quality 70 %dist_gallery_landscape%%%~nf-777.webp
	convert %%f -resize 1036 -quality 70 %dist_gallery_landscape%%%~nf-1036.webp
	convert %%f -resize 1400 -quality 70 %dist_gallery_landscape%%%~nf-1400.webp
	convert %%f -resize 1800 -quality 70 %dist_gallery_landscape%%%~nf-1800.webp
)

set dist_gallery_portrait=..\..\dist\img\gallery-portrait\
for %%f in (gallery-portrait\*.jpg) do (
    exiftool -all= --icc_profile:all %%f

    convert %%f -resize 260 -quality 70 %dist_gallery_portrait%%%~nf-260.jpg

	convert %%f -resize 260 -quality 70 %dist_gallery_portrait%%%~nf-260.webp
	convert %%f -resize 390 -quality 70 %dist_gallery_portrait%%%~nf-390.webp
	convert %%f -resize 520 -quality 70 %dist_gallery_portrait%%%~nf-520.webp
	convert %%f -resize 1040 -quality 70 %dist_gallery_portrait%%%~nf-1040.webp
)

set dist_recipe_thumbnail=..\..\dist\img\recipe-thumbnail\
for %%f in (recipe-thumbnail\*.jpg) do (
    exiftool -all= --icc_profile:all %%f

    convert %%f -resize 370 -quality 70  %dist_recipe_thumbnail%%%~nf-370.jpg

	convert %%f -resize 370 -quality 70  %dist_recipe_thumbnail%%%~nf-370.webp
    convert %%f -resize 555 -quality 70  %dist_recipe_thumbnail%%%~nf-555.webp
    convert %%f -resize 740 -quality 70 %dist_recipe_thumbnail%%%~nf-740.webp
    convert %%f -resize 900 -quality 70 %dist_recipe_thumbnail%%%~nf-900.webp
    convert %%f -resize 1400 -quality 70 %dist_recipe_thumbnail%%%~nf-1400.webp
    convert %%f -resize 1800 -quality 70 %dist_recipe_thumbnail%%%~nf-1800.webp
)

set dist_travel_card=..\..\dist\img\travel-card\
for %%f in (travel-card\*.jpg) do (
    exiftool -all= --icc_profile:all %%f

    convert %%f -resize 370 -quality 70 -gravity center -crop 1:1 +repage %dist_travel_card%%%~nf-370.jpg

	convert %%f -resize 370 -quality 70 -gravity center -crop 1:1 +repage %dist_travel_card%%%~nf-370.webp
    convert %%f -resize 555 -quality 70 -gravity center -crop 1:1 +repage %dist_travel_card%%%~nf-555.webp
    convert %%f -resize 740 -quality 70 -gravity center -crop 1:1 +repage %dist_travel_card%%%~nf-740.webp
)

set dist_others_jpg=..\..\dist\img\others\
for %%f in (others\*.jpg) do (
    exiftool -all= --icc_profile:all %%f

    convert %%f -quality 70 %dist_others_jpg%%%~nf.jpg
)

set dist_others_webp=..\..\dist\img\others\
for %%f in (others\*.webp) do (
    exiftool -all= --icc_profile:all %%f

    convert %%f -quality 70 %dist_others_webp%%%~nf.webp
)
