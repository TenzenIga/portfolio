const ProgressBar = require('progressbar.js')
    const htmlCircle = new ProgressBar.Circle('#html', {
        color: '#e54c21',
        strokeWidth: 8,
        text:{
        value:'HTML5',
        style:{
            color: '#000',
            fontFamily:'Playfair Display',
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: 0,
            margin: 0,
           
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        }
        },
        trailWidth: 8,
        duration: 1200

    }).animate(0.95)
   
    const cssCircle = new ProgressBar.Circle('#css', {
        color: '#1b73ba',
        strokeWidth: 8,
        text:{
        value:'CSS3',
        style:{
            color: '#000',
            fontFamily:'Playfair Display',
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: 0,
            margin: 0,
            
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        }
        },
        trailWidth: 8,
        duration: 1200

    }).animate(0.76)
    
    const jsCircle = new ProgressBar.Circle('#js', {
        color: '#ffab00',
        strokeWidth: 8,
        text:{
        value:'JS',
        style:{
            color: '#000',
            fontFamily:'Playfair Display',
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: 0,
            margin: 0,
            
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        }
        },
        trailWidth: 8,
        duration: 1200

    }).animate(0.9)

export {htmlCircle, cssCircle, jsCircle};   