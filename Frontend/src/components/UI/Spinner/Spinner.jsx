import React from "react";
import ReactDOM from "react-dom";
import classes from "./Spinner.module.css";

function Spin() {
  return (
    <div className={classes.overlay}>
      <svg
        className={classes.spinner}
        viewBox="0 0 100 100"
        height="150px"
        width="150px"
      >
        <clipPath id="clip5">
          <path d="M 57.133294,74.255303 C 57.133294,74.255303 57.593525,74.456308 58.364946,74.503531 59.185564,74.553766 60.641546,74.374756 60.722815,73.092397 60.804084,71.810036 59.332154,71.476482 58.811447,71.444606 58.15145,71.404204 57.170671,71.628101 57.170671,71.628101 Z" />
          <path d="M 56.212298,74.366054 56.050051,71.754325 C 56.050051,71.754325 55.310202,71.217038 53.140112,71.371653 51.523702,71.486819 48.038234,72.053384 47.950378,73.900455 47.871459,75.559649 48.750102,75.959895 51.048611,76.089587 52.038634,76.14545 53.322756,75.995891 54.09466,75.273923 54.922314,74.499812 56.212298,74.366054 56.212298,74.366054 Z" />
          <path d="M 71.95317,70.908836 C 71.95317,70.908836 72.122577,70.436062 72.617339,69.842317 73.143652,69.210707 74.272586,68.273991 75.261486,69.094434 76.250387,69.914878 75.483501,71.214771 75.149539,71.615547 74.726242,72.123531 73.890589,72.683658 73.890589,72.683658 Z" />
          <path d="M 71.240859,71.503069 73.030095,73.412542 C 73.030095,73.412542 72.913604,74.31945 71.312608,75.792547 70.120094,76.889795 67.317099,79.037515 65.912747,77.834524 64.65124,76.753898 64.962656,75.839988 66.444847,74.078434 67.083263,73.31969 68.072885,72.487834 69.127707,72.421333 70.258714,72.350029 71.240859,71.503069 71.240859,71.503069 Z" />
          <path d="M 46.61992,81.783526 C 46.61992,81.783526 47.096006,81.623662 47.868597,81.644279 48.690459,81.666212 50.125129,81.972232 50.093613,83.256777 50.062097,84.541324 48.566584,84.744494 48.045087,84.730577 47.384091,84.712937 46.426729,84.403882 46.426729,84.403882 Z" />
          <path d="M 45.712187,81.592424 45.321498,84.179858 C 45.321498,84.179858 44.537377,84.650185 42.389209,84.305833 40.789129,84.04934 37.366786,83.179258 37.44127,81.331599 37.508177,79.671878 38.418539,79.350238 40.719565,79.422641 41.710673,79.453826 42.976728,79.715435 43.682336,80.502321 44.438906,81.346041 45.712187,81.592424 45.712187,81.592424 Z" />
          <path d="M 37.501701,71.333692 C 37.501701,71.333692 37.72522,71.783418 38.286005,72.315247 38.882553,72.880992 40.11326,73.679296 40.999458,72.748864 41.885656,71.818431 40.972053,70.617111 40.593525,70.258129 40.113741,69.803118 39.218333,69.344531 39.218333,69.344531 Z" />
          <path d="M 36.724801,70.826813 38.278524,68.721249 C 38.278524,68.721249 38.056801,67.83418 36.29456,66.558364 34.98194,65.608062 31.947071,63.802779 30.692995,65.161707 29.56648,66.38241 29.982608,67.253644 31.660585,68.829829 32.383329,69.50873 33.46342,70.219181 34.518783,70.161903 35.65037,70.100488 36.724801,70.826813 36.724801,70.826813 Z" />
          <path d="M 22.702918,63.382721 C 22.702918,63.382721 23.054682,63.741158 23.373606,64.445153 23.712869,65.194044 24.064258,66.618282 22.894971,67.151027 21.725682,67.683772 20.889672,66.427219 20.674399,65.952025 20.401541,65.349716 20.261374,64.353518 20.261374,64.353518 Z" />
          <path d="M 22.478323,62.48269 19.980125,63.261446 C 19.980125,63.261446 19.214532,62.761526 18.585967,60.678714 18.117774,59.127314 17.405566,55.668667 19.100174,54.928604 20.622413,54.263817 21.309396,54.942244 22.249365,57.043773 22.654233,57.948952 22.97192,59.202113 22.572283,60.180562 22.143784,61.22968 22.478323,62.48269 22.478323,62.48269 Z" />
          <path d="M 26.691311,49.181573 C 26.691311,49.181573 26.421814,49.605348 26.256328,50.36029 26.080289,51.163376 26.03289,52.629555 27.287426,52.907383 28.541964,53.18521 29.098266,51.782226 29.209969,51.272643 29.351551,50.626747 29.281401,49.623185 29.281401,49.623185 Z" />
          <path d="M 26.723747,48.254509 29.329299,48.496496 C 29.329299,48.496496 29.974136,47.848238 30.155636,45.680231 30.290828,44.065372 30.267909,40.534232 28.456415,40.16291 26.829179,39.829358 26.298369,40.635863 25.816173,42.886964 25.608479,43.856567 25.558453,45.1484 26.152904,46.0223 26.790289,46.959317 26.723747,48.254509 26.723747,48.254509 Z" />
          <path d="M 23.322128,34.74513 C 23.322128,34.74513 23.293453,35.24652 22.986964,35.956017 22.66093,36.710762 21.843266,37.928692 20.662595,37.421675 19.481923,36.914658 19.849555,35.450867 20.056434,34.971958 20.318653,34.364942 20.961609,33.591208 20.961609,33.591208 Z" />
          <path d="M 23.837134,33.973594 21.58063,32.648586 C 21.58063,32.648586 21.435683,31.745789 22.5543,29.879805 23.387511,28.489911 25.468047,25.636694 27.155453,26.393035 28.671223,27.072444 28.631197,28.037124 27.708167,30.146147 27.310596,31.054555 26.59687,32.132484 25.603997,32.494805 24.539414,32.883294 23.837134,33.973594 23.837134,33.973594 Z" />
          <path d="M 46.61992,81.783526 C 46.61992,81.783526 47.096006,81.623662 47.868597,81.644279 48.690459,81.666212 50.125129,81.972232 50.093613,83.256777 50.062097,84.541324 48.566584,84.744494 48.045087,84.730577 47.384091,84.712937 46.426729,84.403882 46.426729,84.403882 Z" />
          <path d="M 45.712187,81.592424 45.321498,84.179858 C 45.321498,84.179858 44.537377,84.650185 42.389209,84.305833 40.789129,84.04934 37.366786,83.179258 37.44127,81.331599 37.508177,79.671878 38.418539,79.350238 40.719565,79.422641 41.710673,79.453826 42.976728,79.715435 43.682336,80.502321 44.438906,81.346041 45.712187,81.592424 45.712187,81.592424 Z" />
          <path d="M 37.501701,71.333692 C 37.501701,71.333692 37.72522,71.783418 38.286005,72.315247 38.882553,72.880992 40.11326,73.679296 40.999458,72.748864 41.885656,71.818431 40.972053,70.617111 40.593525,70.258129 40.113741,69.803118 39.218333,69.344531 39.218333,69.344531 Z" />
          <path d="M 36.724801,70.826813 38.278524,68.721249 C 38.278524,68.721249 38.056801,67.83418 36.29456,66.558364 34.98194,65.608062 31.947071,63.802779 30.692995,65.161707 29.56648,66.38241 29.982608,67.253644 31.660585,68.829829 32.383329,69.50873 33.46342,70.219181 34.518783,70.161903 35.65037,70.100488 36.724801,70.826813 36.724801,70.826813 Z" />
          <path d="M 22.702918,63.382721 C 22.702918,63.382721 23.054682,63.741158 23.373606,64.445153 23.712869,65.194044 24.064258,66.618282 22.894971,67.151027 21.725682,67.683772 20.889672,66.427219 20.674399,65.952025 20.401541,65.349716 20.261374,64.353518 20.261374,64.353518 Z" />
          <path d="M 22.478323,62.48269 19.980125,63.261446 C 19.980125,63.261446 19.214532,62.761526 18.585967,60.678714 18.117774,59.127314 17.405566,55.668667 19.100174,54.928604 20.622413,54.263817 21.309396,54.942244 22.249365,57.043773 22.654233,57.948952 22.97192,59.202113 22.572283,60.180562 22.143784,61.22968 22.478323,62.48269 22.478323,62.48269 Z" />
          <path d="M 26.691311,49.181573 C 26.691311,49.181573 26.421814,49.605348 26.256328,50.36029 26.080289,51.163376 26.03289,52.629555 27.287426,52.907383 28.541964,53.18521 29.098266,51.782226 29.209969,51.272643 29.351551,50.626747 29.281401,49.623185 29.281401,49.623185 Z" />
          <path d="M 26.723747,48.254509 29.329299,48.496496 C 29.329299,48.496496 29.974136,47.848238 30.155636,45.680231 30.290828,44.065372 30.267909,40.534232 28.456415,40.16291 26.829179,39.829358 26.298369,40.635863 25.816173,42.886964 25.608479,43.856567 25.558453,45.1484 26.152904,46.0223 26.790289,46.959317 26.723747,48.254509 26.723747,48.254509 Z" />
          <path d="M 23.322128,34.74513 C 23.322128,34.74513 23.293453,35.24652 22.986964,35.956017 22.66093,36.710762 21.843266,37.928692 20.662595,37.421675 19.481923,36.914658 19.849555,35.450867 20.056434,34.971958 20.318653,34.364942 20.961609,33.591208 20.961609,33.591208 Z" />
          <path d="M 23.837134,33.973594 21.58063,32.648586 C 21.58063,32.648586 21.435683,31.745789 22.5543,29.879805 23.387511,28.489911 25.468047,25.636694 27.155453,26.393035 28.671223,27.072444 28.631197,28.037124 27.708167,30.146147 27.310596,31.054555 26.59687,32.132484 25.603997,32.494805 24.539414,32.883294 23.837134,33.973594 23.837134,33.973594 Z" />
          <path d="M 36.571791,28.923768 C 36.571791,28.923768 36.069726,28.911741 35.337737,29.159761 34.559066,29.423597 33.278914,30.139934 33.688642,31.35779 34.09837,32.575647 35.587128,32.327776 36.081218,32.160364 36.707477,31.948169 37.530743,31.36999 37.530743,31.36999 Z" />
          <path d="M 37.382504,28.472942 38.520403,30.829346 C 38.520403,30.829346 39.408495,31.046934 41.358946,30.08312 42.811756,29.365214 45.824104,27.522596 45.206911,25.779477 44.652498,24.213661 43.687745,24.175426 41.510893,24.924613 40.57327,25.247305 39.441077,25.871384 38.999534,26.831651 38.526099,27.861273 37.382504,28.472942 37.382504,28.472942 Z" />
          <path d="M 50.507051,19.541321 C 50.507051,19.541321 50.025926,19.685313 49.254443,19.639091 48.433761,19.589921 47.010025,19.236503 47.084114,17.953708 47.158202,16.670913 48.659629,16.517439 49.180377,16.548638 49.840426,16.588184 50.787015,16.928812 50.787015,16.928812 Z" />
          <path d="M 51.407949,19.762414 51.884211,17.189356 C 51.884211,17.189356 52.683494,16.745286 54.819063,17.160671 56.40976,17.470074 59.801374,18.453147 59.665671,20.29732 59.543772,21.953911 58.623247,22.245191 56.325886,22.096537 55.336357,22.032508 54.079671,21.729067 53.400541,20.919218 52.672361,20.050878 51.407949,19.762414 51.407949,19.762414 Z" />
          <path d="M 61.208944,29.692638 C 61.208944,29.692638 60.959771,29.256602 60.369147,28.75812 59.740856,28.227848 58.46601,27.502109 57.635147,28.482271 56.804283,29.462433 57.785881,30.608864 58.18455,30.945338 58.689864,31.371818 59.610312,31.777815 59.610312,31.777815 Z" />
          <path d="M 62.013877,30.153704 60.584619,32.345661 C 60.584619,32.345661 60.857309,33.218411 62.690434,34.390099 64.055852,35.26284 67.190116,36.889453 68.363441,35.460223 69.41742,34.176369 68.951566,33.33068 67.185181,31.85425 66.424356,31.218315 65.304958,30.571565 64.254679,30.689827 63.128543,30.816629 62.013877,30.153704 62.013877,30.153704 Z" />
          <path d="M 75.550481,33.445335 C 75.550481,33.445335 75.120335,33.186127 74.635672,32.584111 74.1201,31.943702 73.424094,30.652384 74.423243,29.844454 75.422393,29.036523 76.545773,30.04442 76.872919,30.450779 77.287577,30.965838 77.672139,31.895446 77.672139,31.895446 Z" />
          <path d="M 75.992773,34.260735 78.217257,32.882648 C 78.217257,32.882648 79.083455,33.175486 80.212355,35.035267 81.053225,36.42054 82.606781,39.591651 81.150749,40.731546 79.842819,41.755495 79.008151,41.270172 77.573044,39.470052 76.954908,38.694697 76.334268,37.560615 76.476833,36.513358 76.629693,35.390462 75.992773,34.260735 75.992773,34.260735 Z" />
          <path d="M 36.571791,28.923768 C 36.571791,28.923768 36.069726,28.911741 35.337737,29.159761 34.559066,29.423597 33.278914,30.139934 33.688642,31.35779 34.09837,32.575647 35.587128,32.327776 36.081218,32.160364 36.707477,31.948169 37.530743,31.36999 37.530743,31.36999 Z" />
          <path d="M 37.382504,28.472942 38.520403,30.829346 C 38.520403,30.829346 39.408495,31.046934 41.358946,30.08312 42.811756,29.365214 45.824104,27.522596 45.206911,25.779477 44.652498,24.213661 43.687745,24.175426 41.510893,24.924613 40.57327,25.247305 39.441077,25.871384 38.999534,26.831651 38.526099,27.861273 37.382504,28.472942 37.382504,28.472942 Z" />
          <path d="M 50.507051,19.541321 C 50.507051,19.541321 50.025926,19.685313 49.254443,19.639091 48.433761,19.589921 47.010025,19.236503 47.084114,17.953708 47.158202,16.670913 48.659629,16.517439 49.180377,16.548638 49.840426,16.588184 50.787015,16.928812 50.787015,16.928812 Z" />
          <path d="M 51.407949,19.762414 51.884211,17.189356 C 51.884211,17.189356 52.683494,16.745286 54.819063,17.160671 56.40976,17.470074 59.801374,18.453147 59.665671,20.29732 59.543772,21.953911 58.623247,22.245191 56.325886,22.096537 55.336357,22.032508 54.079671,21.729067 53.400541,20.919218 52.672361,20.050878 51.407949,19.762414 51.407949,19.762414 Z" />
          <path d="M 61.208944,29.692638 C 61.208944,29.692638 60.959771,29.256602 60.369147,28.75812 59.740856,28.227848 58.46601,27.502109 57.635147,28.482271 56.804283,29.462433 57.785881,30.608864 58.18455,30.945338 58.689864,31.371818 59.610312,31.777815 59.610312,31.777815 Z" />
          <path d="M 62.013877,30.153704 60.584619,32.345661 C 60.584619,32.345661 60.857309,33.218411 62.690434,34.390099 64.055852,35.26284 67.190116,36.889453 68.363441,35.460223 69.41742,34.176369 68.951566,33.33068 67.185181,31.85425 66.424356,31.218315 65.304958,30.571565 64.254679,30.689827 63.128543,30.816629 62.013877,30.153704 62.013877,30.153704 Z" />
          <path d="M 75.550481,33.445335 C 75.550481,33.445335 75.120335,33.186127 74.635672,32.584111 74.1201,31.943702 73.424094,30.652384 74.423243,29.844454 75.422393,29.036523 76.545773,30.04442 76.872919,30.450779 77.287577,30.965838 77.672139,31.895446 77.672139,31.895446 Z" />
          <path d="M 75.992773,34.260735 78.217257,32.882648 C 78.217257,32.882648 79.083455,33.175486 80.212355,35.035267 81.053225,36.42054 82.606781,39.591651 81.150749,40.731546 79.842819,41.755495 79.008151,41.270172 77.573044,39.470052 76.954908,38.694697 76.334268,37.560615 76.476833,36.513358 76.629693,35.390462 75.992773,34.260735 75.992773,34.260735 Z" />
          <path d="M 73.115529,45.98865 C 73.115529,45.98865 73.383197,45.563716 73.545428,44.808069 73.718004,44.004231 73.759083,42.537861 72.503361,42.265444 71.247637,41.993026 70.697387,43.398395 70.587882,43.908454 70.449084,44.554955 70.52356,45.558205 70.52356,45.558205 Z" />
          <path d="M 73.087088,46.915844 70.480518,46.68509 C 70.480518,46.68509 69.838481,47.336121 69.666327,49.504891 69.538096,51.120317 69.576235,54.651326 71.389312,55.014836 73.017971,55.341371 73.5453,54.532586 74.017789,52.279428 74.221302,51.308939 74.26576,50.016902 73.667548,49.145573 73.02613,48.211311 73.087088,46.915844 73.087088,46.915844 Z" />
        </clipPath>
        <path
          className={classes.path}
          clip-path="url(#clip5)"
          d="M 67.757283,59.202113 C 62.675098,69.009189 50.604962,72.839469 40.797887,67.757283 30.990811,62.675098 27.160531,50.604962 32.242717,40.797887 37.324902,30.990811 49.395038,27.160531 59.202113,32.242717 69.009189,37.324902 72.839469,49.395038 67.757283,59.202113"
        />
      </svg>
      <div className={classes.text}>
        Loading <span>...</span>
      </div>
    </div>
  );
}

const Spinner = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Spin />, document.getElementById("spinnerRoot"))}
    </React.Fragment>
  );
};
export default Spinner;
