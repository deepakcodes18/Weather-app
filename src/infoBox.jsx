import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({ info }) {

    if (!info) return null;

    // ✅ Weather based images
    const weatherImages = {
        Clear: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
        Clouds: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31",
        Rain: "https://images.unsplash.com/photo-1527766833261-b09c3163a791",
        Snow: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
        Haze: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
        Mist: "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227",
        Smoke: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068",
        Fog: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66"
    };

    // ✅ Select image based on weather
    const imageUrl =
        weatherImages[info.weather] || weatherImages["Clear"];

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>

                    {/* ✅ Dynamic Image */}
                    <CardMedia
                        sx={{ height: 190 }}
                        image={imageUrl}
                        title={info.weather}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                            component={"div"}
                        >
                            <p>🌡 Temperature = {info.temp}&deg;C</p>
                            <p>💧 Humidity = {info.humidity}</p>
                            <p>⬇ Min Temp = {info.tempMin}&deg;C</p>
                            <p>⬆ Max Temp = {info.tempMax}&deg;C</p>
                            <p>
                                The weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C
                            </p>
                        </Typography>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}