import { Component } from '@angular/core';
import Dynamsoft from 'dwt';
import { WebTwain } from 'dwt/dist/types/WebTwain';


@Component({
  selector: 'app-dwt',
  standalone: true,
  imports: [],
  templateUrl: './dwt.component.html',
  styleUrl: './dwt.component.css'
})

export class DwtComponent {
  DWObject: WebTwain | any = null;
  Dynamsoft_OnReady() {
      this.DWObject = Dynamsoft.DWT.GetWebTwain(this.containerId);
  }

  containerId = "dwtcontrolContainer";
  ngOnInit(): void {
    Dynamsoft.DWT.Containers = [{
        WebTwainId: 'dwtObject',
        ContainerId: this.containerId,
        Width: '300px',
        Height: '400px'
    }];
    Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => {
        this.Dynamsoft_OnReady();
    });
    Dynamsoft.DWT.ProductKey = "t01878AUAACp3FxE+WSxZ8Qc6M1CMwIJwODIkvKL8d9TuXfACjkw6VYB72LGpbFJu9lMaqU9AnbIgcuEbUutC9VzLIfZ5xxX+OdXAafWdhvpONnDqkRNISxjX2+6WdfMCTcB7AWx/DjvAElhzOQGfsOVGD5AHmAOYlwM94HYX18MXcHemjy50dqqB0+o7ywKp42QDpx45c4H0Ed2YdzuuBcLy5RwAeYDdAtw+skuB4AzIA+wCMCRGJP0AYU0sNA=="
    Dynamsoft.DWT.ResourcesPath = 'assets/dwt-resources';
    Dynamsoft.DWT.Load();
}

acquireImage() {
  if (this.DWObject) {
      this.DWObject.SelectSourceAsync()
      .then(() => {
          return this.DWObject.AcquireImageAsync({
              IfCloseSourceAfterAcquire: true,
          });
      })
      .catch((exp: any) => {
          console.error('Error',exp);
      });
  }
}


}
