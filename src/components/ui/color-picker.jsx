import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as ColorCodeConverter from '@uiw/color-convert';
import Alpha from '@uiw/react-color-alpha';
import Hue from '@uiw/react-color-hue';
import Saturation from '@uiw/react-color-saturation';
import { useEffect } from 'react';
import { useState } from 'react';
import { memo } from 'react';
import { useCallback } from 'react';

const ColorInputs = memo(({ labels, color, setColor }) => {
  const [convertedColor, setConvertedColor] = useState(color);

  useEffect(() => {
    const roundedColor = { ...color };

    labels.forEach(label => {
      if (typeof roundedColor[label.toLowerCase()] === 'string') {
        if (
          roundedColor[label.toLowerCase()].startsWith('0') &&
          !roundedColor[label.toLowerCase()].startsWith('0.')
        ) {
          roundedColor[label.toLowerCase()] = parseFloat(
            roundedColor[label.toLowerCase()]
          );
        }
      }
    });

    setConvertedColor(roundedColor);
  }, [color, labels]);

  const handleChange = useCallback(
    (e, label) => {
      const { value } = e.target;

      // Convert empty string to 0, otherwise parse as float
      const newValue = value === '' ? 0 : value;

      let minRange, maxRange;
      const isRGBA = ['r', 'g', 'b'].includes(label.toLowerCase());

      if (isRGBA) {
        minRange = 0;
        maxRange = 255;
      } else {
        switch (label.toLowerCase()) {
          case 'h':
            minRange = 0;
            maxRange = 360;
            break;
          case 's':
          case 'l':
            minRange = 0;
            maxRange = 100;
            break;
          case 'a':
            minRange = 0;
            maxRange = 1;
            break;
          default:
            return;
        }
      }

      // Validate the new value against the determined range
      if (isNaN(newValue) || newValue < minRange || newValue > maxRange) {
        return;
      }

      const newColor = { ...convertedColor, [label.toLowerCase()]: newValue };
      setConvertedColor(newColor);

      // Convert and update HSV/HSVA color based on RGB/RGBA changes
      if (isRGBA) {
        setColor(ColorCodeConverter.rgbaToHsva(newColor));
      } else {
        setColor(ColorCodeConverter.hslaToHsva(newColor));
      }
    },
    [convertedColor, setColor, labels]
  );

  return (
    <div className="grid grid-cols-4 gap-2">
      {labels.map((label, index) => (
        <div
          key={index}
          className="flex flex-row w-full max-w-sm items-center gap-1.5 col-span-2"
        >
          <Label htmlFor={`${label.toLowerCase()}`}>{label}</Label>
          <Input
            type="text"
            value={
              typeof convertedColor[label.toLowerCase()] === 'number' &&
              convertedColor[label.toLowerCase()] % 1 !== 0
                ? convertedColor[label.toLowerCase()].toFixed(2)
                : convertedColor[label.toLowerCase()]
            }
            onChange={e => handleChange(e, label)}
          />
        </div>
      ))}
    </div>
  );
});

export const ColorPicker = ({
  color,
  setColor,
  isOpen = false,
  onOpenChange,
}) => {
  const [hsva, setHsva] = useState(ColorCodeConverter.hexToHsva(color));
  const [colorHexAlpha, setColorHexAlpha] = useState(
    ColorCodeConverter.hsvaToHexa(hsva)
  );

  const handleColorHexChange = useCallback(
    hex => {
      setColorHexAlpha(hex);

      if (ColorCodeConverter.validHex(hex)) {
        setHsva(ColorCodeConverter.hexToHsva(hex));
      }
    },
    [setColor]
  );

  useEffect(() => {
    setColor(ColorCodeConverter.hsvaToHexa(hsva));
    setColorHexAlpha(ColorCodeConverter.hsvaToHexa(hsva));
  }, [hsva, setColor]);

  useEffect(() => {
    setHsva(ColorCodeConverter.hexToHsva(color));
  }, [color]);

  const onHandleSubmit = () => {
    onOpenChange();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-white/40" />
        <DialogContent className="sm:max-w-[425px] w-80">
          <DialogHeader>
            <DialogTitle className="text-lg">{'Color Picker'}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col">
            <Saturation
              style={{ width: '100%', height: '200px' }}
              hsva={hsva}
              onChange={newColor => {
                setHsva(prevHsva => ({
                  ...prevHsva,
                  ...newColor,
                  a: prevHsva.a,
                }));
              }}
              radius={10}
            />

            <Hue
              hue={hsva.h}
              onChange={newHue => {
                setHsva(prevHsva => ({ ...prevHsva, ...newHue }));
              }}
              style={{
                marginTop: '10px',
              }}
              radius={10}
            />

            {/* <Alpha
              hsva={hsva}
              onChange={newAlpha => {
                setHsva(prevHsva => ({ ...prevHsva, ...newAlpha }));
              }}
              style={{
                borderRadius: '10px',
                marginTop: '10px',
                overflow: 'hidden',
              }}
            /> */}
            {/* <Tabs defaultValue="rgba" className="w-full mt-4">
              <TabsList className="grid grid-cols-3 gap-2">
                <TabsTrigger className="col-span-1" value="rgba">
                  {'RGBA'}
                </TabsTrigger>
                <TabsTrigger className="col-span-1" value="hsla">
                  {'HSLA'}
                </TabsTrigger>
                <TabsTrigger className="col-span-1" value="hex">
                  {'HEX'}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="rgba">
                <ColorInputs
                  labels={['R', 'G', 'B', 'A']}
                  color={ColorCodeConverter.hsvaToRgba(hsva)}
                  setColor={setHsva}
                />
              </TabsContent>

              <TabsContent value="hsla">
                <ColorInputs
                  labels={['H', 'S', 'L', 'A']}
                  color={ColorCodeConverter.hsvaToHsla(hsva)}
                  setColor={setHsva}
                />
              </TabsContent>

              <TabsContent value="hex">
                <div className="flex flex-row w-full max-w-sm items-center gap-1.5 col-span-1">
                  <Label htmlFor="hex">{'HEX'}</Label>
                  <Input
                    type="text"
                    value={colorHexAlpha}
                    onChange={e => handleColorHexChange(e.target.value)}
                  />
                </div>
              </TabsContent>
            </Tabs> */}
          </div>

          <DialogFooter>
            <Button type="submit" onClick={onHandleSubmit}>
              {'Save changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
